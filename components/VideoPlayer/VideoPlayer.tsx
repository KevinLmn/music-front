import { useEffect } from "react";
import ReactPlayer from "react-player/lazy";

interface VideoPlayerProps {
  videoName: string | null;
  play: boolean;
}

const VideoPlayer = ({ videoName, play }: VideoPlayerProps) => {
  const videoUrl = `http://localhost:8000/video?videoName=${encodeURIComponent(
    videoName ?? "piano"
  )}`;

  useEffect(() => {
    const video = document.getElementById("video") as HTMLVideoElement;
    if (video) {
      video.pause();
      video.load();
      video.play();
    }
  }, [videoName]);

  return (
    <div className={`hello flex flex-col justify-center items-center`}>
      <ReactPlayer
        width="1024px"
        height="576px"
        url={videoUrl}
        controls={true}
        light={false}
        pip={true}
        playing={play}
        muted={true}
      />
    </div>
  );
};

export default VideoPlayer;
