import { useEffect, useRef, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import "./AudioPlayer.css"; //
import music from "../assets/Lover.mp3";
const Reproductor = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [play, setPlay] = useState(false);
  const audioRef = useRef();
  const tracks = [
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  ];
  const handlePlay = () => {
    audioRef.current.audioEl.current.play();
    setPlay(true);
  };

  const handlePause = () => {
    audioRef.current.audioEl.current.pause();
    setPlay(false);
  };

  const handleNext = () => {
    setCurrentTrack((currentTrack + 1) % tracks.length);
    handlePlay();
  };

  const handlePrevious = () => {
    setCurrentTrack((currentTrack - 1 + tracks.length) % tracks.length);
    handlePlay();
  };
  const handleProgressClick = (e) => {
    const progressBar = e.target;
    const progressWidth = progressBar.offsetWidth;
    const clickPosition = e.nativeEvent.offsetX;
    const newTime = (clickPosition / progressWidth) * duration;
    audioRef.current.audioEl.current.currentTime = newTime;
  };

  const progressPercentage = (currentTime / duration) * 100;

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  useEffect(() => {
    const audioElement = audioRef.current.audioEl.current;
    const handleTimeUpdate = () => {
      setCurrentTime(audioElement.currentTime);
      setDuration(audioElement.duration);
    };

    if (audioElement) {
      audioElement.addEventListener("timeupdate", handleTimeUpdate);
      return () => {
        audioElement.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [currentTrack]);
  return (
    <div>
      <ReactAudioPlayer
        ref={audioRef}
        src={music}
        controls
        style={{ display: "none" }}
      />
      <div style={{ display: "flex", gap: 5 }}>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 11,
          }}
        >
          {formatTime(currentTime)}
        </span>
        <div
          className="progress-container"
          style={{ flexGrow: 1 }}
          onClick={handleProgressClick}
        >
          <div
            className="progress-bar"
            style={{
              width: `${progressPercentage}%`,
              backgroundColor: "#8F5472",
            }}
          />
        </div>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 11,
          }}
        >
          {formatTime(duration)}
        </span>
      </div>
      <div className="controls">
        {!play ? (
          <div onClick={handlePlay} style={{ cursor: "pointer" }}>
            <svg
              height="30"
              viewBox="0 0 48 48"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h48v48H0z" fill="none" />
              <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-4 29V15l12 9-12 9z" />
            </svg>
          </div>
        ) : (
          <div onClick={handlePause} style={{ cursor: "pointer" }}>
            <svg
              height="30"
              viewBox="0 0 48 48"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h48v48H0z" fill="none" />
              <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-2 28h-4V16h4v16zm8 0h-4V16h4v16z" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reproductor;
