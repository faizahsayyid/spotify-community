import React, { FunctionComponent } from "react";
import {
  FaPauseCircle,
  FaStepForward,
  FaStepBackward,
  FaPlayCircle,
} from "react-icons/fa";

interface MusicPlayerProps {
  onTogglePlay(): void;
  isPaused: boolean;
  positionStr: string;
  positionPercentage: number;
  timeLeftStr: string;
  onNextTrack(): void;
  onPrevTrack(): void;
  disabled: boolean;
}

const MusicPlayer: FunctionComponent<MusicPlayerProps> = ({
  onTogglePlay,
  isPaused,
  positionStr,
  positionPercentage,
  timeLeftStr,
  onNextTrack,
  onPrevTrack,
  disabled,
}) => {
  return (
    <object className="w-1/2 flex flex-col items-center">
      <audio />
      <div className="flex gap-4 items-center">
        <button
          className="hover:opacity-75 disabled:opacity-50"
          onClick={onPrevTrack}
          disabled={disabled}
        >
          <FaStepBackward className="text-slate-400 text-xl" />
        </button>
        <button
          className="hover:opacity-75 disabled:opacity-50"
          onClick={onTogglePlay}
          disabled={disabled}
        >
          {isPaused ? (
            <FaPlayCircle className="text-yellow-50 text-2xl" />
          ) : (
            <FaPauseCircle className="text-yellow-50 text-2xl" />
          )}
        </button>
        <button
          className="hover:opacity-75 disabled:opacity-50"
          onClick={onNextTrack}
          disabled={disabled}
        >
          <FaStepForward className="text-slate-400 text-xl" />
        </button>
      </div>
      <div className="w-full flex text-yellow-50 items-center">
        <span className={disabled ? "opacity-75" : ""}>{positionStr}</span>
        <div className="w-full bg-slate-700 rounded-full h-1 mx-2">
          <div
            className="bg-slate-400 h-1 rounded-full"
            style={{ width: `${positionPercentage}%` }}
          ></div>
        </div>
        <span className={disabled ? "opacity-75" : ""}>{timeLeftStr}</span>
      </div>
    </object>
  );
};

export default MusicPlayer;
