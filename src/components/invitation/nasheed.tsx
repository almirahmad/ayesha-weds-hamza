import { useCallback, useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const VIDEO_ID = "ivrumxRUz_Y";
const VOLUME = 22;

type YTPlayer = {
  playVideo: () => void;
  pauseVideo: () => void;
  setVolume: (n: number) => void;
  unMute: () => void;
};

declare global {
  interface Window {
    YT?: {
      Player: new (
        el: string | HTMLElement,
        opts: Record<string, unknown>,
      ) => YTPlayer;
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

function loadApi() {
  if (document.getElementById("yt-iframe-api")) return;
  const tag = document.createElement("script");
  tag.id = "yt-iframe-api";
  tag.src = "https://www.youtube.com/iframe_api";
  document.head.appendChild(tag);
}

export function Nasheed() {
  const hostRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadApi();

    const mount = () => {
      if (cancelled || !hostRef.current || playerRef.current || !window.YT?.Player) return;
      playerRef.current = new window.YT.Player(hostRef.current, {
        videoId: VIDEO_ID,
        width: 200,
        height: 113,
        playerVars: {
          autoplay: 0,
          loop: 1,
          playlist: VIDEO_ID,
          controls: 0,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          fs: 0,
          disablekb: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (event: { target: YTPlayer }) => {
            event.target.setVolume(VOLUME);
            setReady(true);
          },
        },
      });
    };

    if (window.YT?.Player) mount();
    else {
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        prev?.();
        mount();
      };
    }

    return () => {
      cancelled = true;
    };
  }, []);

  const toggle = useCallback(() => {
    const player = playerRef.current;
    if (!player) return;
    if (playing) {
      player.pauseVideo();
      setPlaying(false);
      return;
    }
    player.unMute();
    player.setVolume(VOLUME);
    player.playVideo();
    setPlaying(true);
  }, [playing]);

  return (
    <>
      <div className="nasheed-frame" aria-hidden>
        <div ref={hostRef} />
      </div>
      <button
        type="button"
        className="nasheed-btn"
        onClick={toggle}
        disabled={!ready}
        aria-pressed={playing}
        aria-label={playing ? "Pause nasheed" : "Play nasheed"}
      >
        {playing ? (
          <Volume2 className="size-4" strokeWidth={1.7} />
        ) : (
          <VolumeX className="size-4" strokeWidth={1.7} />
        )}
        <span>Nasheed</span>
      </button>
    </>
  );
}
