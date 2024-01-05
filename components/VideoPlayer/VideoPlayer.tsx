import { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";

interface VideoPlayerProps {
  videoName: string | null;
  isVideoVisible: boolean;
  isVideoTimingSaved: boolean;
}

const VideoPlayer = ({
  videoName,
  isVideoVisible,
  isVideoTimingSaved,
}: VideoPlayerProps) => {
  const videoUrl = `http://localhost:8000/video?videoName=${encodeURIComponent(
    videoName ?? "macmiller"
  )}`;
  const [isPlayerInitialized, setIsPlayerInitialized] = useState(false);

  useEffect(() => {
    const video = document.getElementById("video") as HTMLVideoElement;
    if (video) {
      video.pause();
      video.load();
      video.play();
    }
  }, [videoName]);

  useEffect(() => {
    setIsPlayerInitialized(false);
  }, [videoName]);

  const handleProgress = (progress: any) => {
    localStorage.setItem(
      `videoTime-${videoName}`,
      String(progress.playedSeconds)
    );
  };

  console.log(isPlayerInitialized);
  useEffect(() => {
    if (!isVideoTimingSaved) {
      localStorage.removeItem(`videoTime-${videoName}`);
    }
  }, [isVideoTimingSaved, videoName]);

  return (
    <div
      className={`hello flex flex-col justify-center items-center w-3/4 h-3/4 rounded-md bg-muted`}
    >
      <ReactPlayer
        width="1024px"
        height="576px"
        url={videoUrl}
        controls={true}
        light={false}
        pip={true}
        playing={isVideoVisible}
        muted={true}
        onReady={(player) => {
          if (!isPlayerInitialized && isVideoTimingSaved) {
            const savedTime =
              Number(localStorage.getItem(`videoTime-${videoName}`)) || 0;
            player.seekTo(savedTime, "seconds");
            setIsPlayerInitialized(true);
          }
        }}
        onProgress={handleProgress}
      />
    </div>
  );
};

export default VideoPlayer;
