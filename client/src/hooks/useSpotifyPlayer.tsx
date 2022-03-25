import { useEffect, useState } from "react";

const useSpotifyPlayer = (token: string) => {
  const [spotifyPlayer, setSpotifyPlayer] = useState<Spotify.Player>();
  const [isPaused, setPaused] = useState(true);
  const [isActive, setActive] = useState(false);
  const [timeLeftStr, setTimeLeftStr] = useState("0:00");
  const [positionPercentage, setPositionPercentage] = useState(0);
  const [position, setPosition] = useState<number>(0);
  const [currentTrack, setTrack] = useState<Spotify.Track>({} as Spotify.Track);
  const [timer, setTimer] = useState<any>();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "Web Playback SDK",
        getOAuthToken: (cb: any) => {
          cb(token);
        },
        volume: 0.5,
      });

      player.addListener(
        "player_state_changed",
        (state: Spotify.PlaybackState) => {
          !state ? setActive(false) : setActive(true);
          if (!state) return;

          setTrack(state.track_window.current_track);
          setPaused(state.paused);
          setTimeLeftStr(msToString(state.duration - state.position));
          setPositionPercentage((state.position / state.duration) * 100);
          setPosition(state.position);
        }
      );

      player.connect();

      setSpotifyPlayer(player);
    };
  }, [token]);

  useEffect(() => {
    if (isActive && !isPaused) {
      setTimer(
        setInterval(() => {
          setPosition((prev) => prev + 1000);
        }, 1000)
      );
    } else {
      clearInterval(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, isPaused]);

  const onTogglePlay = (): void => {
    if (isActive) {
      spotifyPlayer?.togglePlay().then(() => setPaused((prev) => !prev));
    }
  };

  const msToString = (timeInMs: number) => {
    const seconds = Math.floor((timeInMs % 60000) / 1000);
    const secondsStr =
      seconds < 10
        ? "0" + Math.floor((timeInMs % 60000) / 1000).toString()
        : Math.floor((timeInMs % 60000) / 1000).toString();

    return Math.floor(timeInMs / 60000).toString() + ":" + secondsStr;
  };

  const onNextTrack = (): void => {
    if (isActive) {
      spotifyPlayer?.nextTrack();
    }
  };

  const onPrevTrack = (): void => {
    if (isActive) {
      spotifyPlayer?.previousTrack();
    }
  };

  return {
    isPaused,
    currentTrack,
    isActive,
    onTogglePlay,
    onPrevTrack,
    onNextTrack,
    timeLeftStr,
    positionPercentage,
    positionStr: msToString(position),
  };
};

export default useSpotifyPlayer;
