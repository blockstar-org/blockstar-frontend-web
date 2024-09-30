import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./timeline.css";
import { useState, useRef, useEffect } from "react";
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
        if (clip.asset.type === "video" &&
            currentTime >= clip.start &&
            currentTime <= clip.start + clip.length) {
            return (_jsx(ReactPlayer, { url: clip.asset.src, playing: isPlaying, controls: false, width: "100%", 
                //   height="auto"
                style: { position: "absolute", top: 0, left: 0, zIndex: 1 } }, clip.asset.src));
        }
        if (clip.asset.type === "text" &&
            currentTime >= clip.start &&
            currentTime <= clip.start + clip.length) {
            return (_jsx("div", { style: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: `${clip.font.size}px`,
                    color: clip.font.color,
                    fontFamily: clip.font.family,
                    zIndex: 2,
                }, children: clip.asset.text }, clip.asset.text));
        }
        if (clip.asset.type === "image" &&
            currentTime >= clip.start &&
            currentTime <= clip.start + clip.length) {
            return (_jsx("img", { src: clip.asset.src, alt: "Clip", style: {
                    position: "absolute",
                    top: `${clip.offset?.y * 100 || 50}%`,
                    left: `${clip.offset?.x * 100 || 50}%`,
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                    width: "200px",
                    height: "auto",
                } }, clip.asset.src));
        }
        return null;
    };
    return (_jsxs("div", { style: { position: "relative", width: "80%", margin: "0 auto" }, children: [_jsx("div", { style: { position: "relative", width: "100%", height: "400px" }, children: timeline.tracks.map((track, trackIndex) => track.clips.map((clip, clipIndex) => renderClip(clip))) }), _jsx("button", { onClick: handlePlayPause, children: isPlaying ? "Pause" : "Play" }), _jsxs("p", { children: ["Current Time: ", currentTime.toFixed(2), " seconds"] }), _jsxs("div", { style: { marginTop: "20px" }, children: [_jsx("h2", { children: "Timeline" }), _jsx("div", { style: { display: "flex", justifyContent: "space-between" }, children: timeline.tracks.map((track, trackIndex) => track.clips.map((clip, clipIndex) => (_jsxs("div", { style: {
                                width: `${(clip.length / 16) * 100}%`,
                                backgroundColor: clip.asset.type === "video"
                                    ? "#4caf50"
                                    : clip.asset.type === "image"
                                        ? "#ff9800"
                                        : "#2196f3",
                                textAlign: "center",
                                padding: "10px",
                                color: "#fff",
                            }, children: [clip.asset.type, " (", clip.start, " - ", clip.start + clip.length, "s)"] }, clipIndex)))) })] })] }));
};
