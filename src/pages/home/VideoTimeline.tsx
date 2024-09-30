import "./timeline.css";
import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";

export const VideoTimeline = ({ timeline }) => {
  const playerRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current) {
        setCurrentTime(playerRef.current.getCurrentTime());
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const renderClip = (clip) => {
    if (
      clip.asset.type === "video" &&
      currentTime >= clip.start &&
      currentTime <= clip.start + clip.length
    ) {
      return (
        <ReactPlayer
          key={clip.asset.src}
          url={clip.asset.src}
          playing={isPlaying}
          controls={false}
          width="100%"
        //   height="auto"
          style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
        />
      );
    }

    if (
      clip.asset.type === "text" &&
      currentTime >= clip.start &&
      currentTime <= clip.start + clip.length
    ) {
      return (
        <div
          key={clip.asset.text}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: `${clip.font.size}px`,
            color: clip.font.color,
            fontFamily: clip.font.family,
            zIndex: 2,
          }}
        >
          {clip.asset.text}
        </div>
      );
    }

    if (
      clip.asset.type === "image" &&
      currentTime >= clip.start &&
      currentTime <= clip.start + clip.length
    ) {
      return (
        <img
          key={clip.asset.src}
          src={clip.asset.src}
          alt="Clip"
          style={{
            position: "absolute",
            top: `${clip.offset?.y * 100 || 50}%`,
            left: `${clip.offset?.x * 100 || 50}%`,
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            width: "200px",
            height: "auto",
          }}
        />
      );
    }

    return null;
  };

  return (
    <div style={{ position: "relative", width: "80%", margin: "0 auto" }}>
      {/* Merged Clips (Videos, Images, Text) */}
      <div style={{ position: "relative", width: "100%", height: "400px" }}>
        {timeline.tracks.map((track, trackIndex) =>
          track.clips.map((clip, clipIndex) => renderClip(clip))
        )}
      </div>

      {/* Playback Controls */}
      <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>

      <p>Current Time: {currentTime.toFixed(2)} seconds</p>

      {/* Display Timeline */}
      <div style={{ marginTop: "20px" }}>
        <h2>Timeline</h2>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {timeline.tracks.map((track, trackIndex) =>
            track.clips.map((clip, clipIndex) => (
              <div
                key={clipIndex}
                style={{
                  width: `${(clip.length / 16) * 100}%`,
                  backgroundColor:
                    clip.asset.type === "video"
                      ? "#4caf50"
                      : clip.asset.type === "image"
                      ? "#ff9800"
                      : "#2196f3",
                  textAlign: "center",
                  padding: "10px",
                  color: "#fff",
                }}
              >
                {clip.asset.type} ({clip.start} - {clip.start + clip.length}s)
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
