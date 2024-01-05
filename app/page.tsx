"use client";

import ListItem from "@/components/ListItem/ListItem";
import Navbar from "@/components/Navbar/Navbar";
import SimpleSlider from "@/components/Slider/Slider";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.scss";
import { MemberName } from "./utils";

const VideoPlayerNoSSR = dynamic(
  () => import("@/components/VideoPlayer/VideoPlayer"),
  { ssr: false }
);
export default function Home() {
  const [videoName, setVideoName] = useState<string | null>(null);
  const [isVideoVisible, setIsVideoVisible] = useState<boolean>(false);
  const [player, setPlayer] = useState<MemberName>("Marc");
  const [isVideoTimingSaved, setIsVideoTimingSaved] = useState<boolean>(true);
  const [hello, setHello] = useState<MemberName[]>(["Polo", "Marc", "Jules"]);
  const videoRef = useRef(null);

  const makeNewOrder = (playerValue: MemberName) => {
    const members: MemberName[] = ["Marc", "Polo", "Jules"];

    const filteredMembers = members.filter((member) => member !== playerValue);

    const MIDDLE = Math.floor(filteredMembers.length / 2);

    filteredMembers.splice(MIDDLE, 0, playerValue);

    setHello(filteredMembers);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVideoVisible(entry.isIntersecting);
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <main className="h-screen relative">
      <div className={styles.swiperContainer}>
        <SimpleSlider />
      </div>
      <div className={styles.looby}>
        <div className="flex justify-end">
          <Navbar />
        </div>
        <div
          className={`flex flex-col justify-center items-center ${styles.textBox}`}
        >
          <div
            className={`flex flex-col justify-center items-center gap-6 border-[#966F33] border-4 p-8`}
          >
            <p className="text-[#f7efe1] text-5xl">Welcome to our band page</p>
            <p className="text-[#f7efe1] text-3xl">
              Listen to our music for free !
            </p>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className="flex h-screen">
          <div className="w-1/4 bg-[#966F33] dark:bg-gray-900 overflow-auto">
            <div className="flex flex-col items-center justify-center h-full p-4 space-y-4">
              <h2 className="text-lg font-semibold text-center text-[#1c1f1d]">
                A little display of our members !
              </h2>
              {hello.length > 0 &&
                hello.map((member: MemberName, index: number) => (
                  <>
                    <ListItem
                      key={index}
                      setVideoName={setVideoName}
                      setPlayer={setPlayer}
                      member={member}
                      makeNewOrder={makeNewOrder}
                      player={player}
                    />
                  </>
                ))}
            </div>
          </div>
          <div className="w-3/4 flex flex-col gap-8 justify-center items-center bg-[#1c1f1d]">
            <div
              ref={videoRef}
              className="w-3/4 flex justify-center items-center"
            >
              <VideoPlayerNoSSR
                videoName={videoName}
                isVideoVisible={isVideoVisible}
                isVideoTimingSaved={isVideoTimingSaved}
              />
            </div>
            <button onClick={() => setIsVideoTimingSaved(!isVideoTimingSaved)}>
              <div
                className={`text-white p-2 rounded-md flex gap-2 items-center border-2 ${
                  isVideoTimingSaved && "bg-[#966F33] text-[#ffffff]"
                }`}
              >
                Save current video timing after switching
                {isVideoTimingSaved ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : (
                  <FontAwesomeIcon icon={faXmark} />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
