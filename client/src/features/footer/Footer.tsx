import React, { FunctionComponent } from "react";
import MusicItem from "../music-item/MusicItem";
import MusicPlayer from "../music-player/MusicPlayer";
import { FaExternalLinkAlt, FaDesktop } from "react-icons/fa";
import useSpotifyPlayer from "../../hooks/useSpotifyPlayer";

const Footer: FunctionComponent = () => {
  const {
    isActive,
    currentTrack,
    onTogglePlay,
    timeLeftStr,
    positionStr,
    positionPercentage,
    isPaused,
    onNextTrack,
    onPrevTrack,
  } = useSpotifyPlayer(
    "BQD4v9N-Vb8WhkoloYPmBSA4JKLlnqcCpUzIjnsSAmSXxopV_e_2DHFR4SV-m4WM6OldhEFEUo9lU3Jnd-TAWJjZpxXJw6pHHghPPPqTjfufUE8P-EO7E8XY-wyeVM0EyWj3W9lHS1MgMRyInK6NxPgUzjhrfrTB2St2KJ3kNfWxAz3UCBrK2es"
  );

  const artistArrayToString = (
    artists?: Array<{ uri: string; name: string }>
  ) => {
    return artists
      ? artists.reduce(
          (prev: string, curr: { uri: string; name: string }, index) => {
            return index > 0 ? prev + ", " + curr : prev;
          },
          artists[0].name
        )
      : "";
  };

  return (
    <footer className="bg-slate-900 w-full px-5 py-3 fixed bottom-0 flex items-center justify-between">
      {isActive ? (
        <MusicItem
          name={currentTrack.name}
          creator={artistArrayToString(currentTrack.artists)}
          coverSrc={currentTrack.album?.images[0].url}
        />
      ) : (
        // TODO: add a function to connect spotify listening to our app
        <button className="text-sm tracking-widest hover:opacity-75 text-green-500 font-semibold bg-inherit p-1 rounded flex items-center gap-2 h-16">
          CONNECT <FaDesktop className="text-lg" />
        </button>
      )}
      <MusicPlayer
        {...{
          onTogglePlay,
          timeLeftStr,
          positionStr,
          positionPercentage,
          isPaused,
          onNextTrack,
          onPrevTrack,
          disabled: !isActive,
        }}
      />
      <a href="https://open.spotify.com/">
        <FaExternalLinkAlt className="text-green-500 text-xl hover:opacity-75" />
      </a>
    </footer>
  );
};

export default Footer;
