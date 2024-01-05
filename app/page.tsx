"use client";

import ListItem from "@/components/ListItem/ListItem";
import Navbar from "@/components/Navbar/Navbar";
import SimpleSlider from "@/components/Slider/Slider";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.scss";
import { Member } from "./utils";

const VideoPlayerNoSSR = dynamic(
  () => import("@/components/VideoPlayer/VideoPlayer"),
  { ssr: false }
);
export default function Home() {
  const [videoName, setVideoName] = useState<string | null>(null);
  const [isVideoVisible, setIsVideoVisible] = useState<boolean>(false);
  const [player, setPlayer] = useState<Member>(Member.Marc);
  const [isVideoTimingSaved, setIsVideoTimingSaved] = useState<boolean>(false);
  const [hello, setHello] = useState([Member.Marc, Member.Polo, Member.Jules]);
  const videoRef = useRef(null);

  let filteredMembers = [Member.Marc, Member.Polo, Member.Jules];

  const makeNewOrder = (playerValue) => {
    const membersArray = Object.keys(Member).filter((key) =>
      isNaN(Number(key))
    );

    const filteredMembers = membersArray.filter(
      (member) => member !== Member[playerValue]
    );

    const MIDDLE = Math.floor(filteredMembers.length / 2);

    filteredMembers.splice(MIDDLE, 0, Member[playerValue]);

    setHello(filteredMembers);

    console.log(filteredMembers, "hello");
  };

  console.log(hello, "hello");

  useEffect(() => {
    makeNewOrder(player);
  }, [player]);

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
              {/* <div className="space-y-2 w-full ">
                <div
                  className={`block p-2 rounded hover:bg-gray-900 hover:text-black ${
                    player === Member.Marc && "bg-gray-900 dark:bg-gray-800"
                  }`}
                  onClick={() => {
                    setVideoName(memberInstruments[Member.Marc]);
                    setPlayer(Member.Marc);
                  }}
                >
                  <h3 className="font-medium text-center text-[#f7efe1]">
                    Our talented Marc !
                  </h3>
                  <p className="text-sm text-[#f7efe1] dark:text-black text-center">
                    Instrument : Piano
                  </p>
                </div> */}
              {hello.length > 0 &&
                hello.map((member, index) => (
                  <ListItem
                    key={index}
                    setVideoName={setVideoName}
                    setPlayer={setPlayer}
                    member={member}
                    makeNewOrder={makeNewOrder}
                    player={player}
                  />
                ))}
              {/* {filteredMembers && filteredMembers.length > 0 && (
                <>
                  <ListItem
                    setVideoName={setVideoName}
                    setPlayer={setPlayer}
                    member={filteredMembers[0]}
                    makeNewOrder={makeNewOrder}
                    player={player}
                  />
                  <ListItem
                    setVideoName={setVideoName}
                    setPlayer={setPlayer}
                    member={filteredMembers[1]}
                    makeNewOrder={makeNewOrder}
                    player={player}
                  />
                  <ListItem
                    setVideoName={setVideoName}
                    setPlayer={setPlayer}
                    member={filteredMembers[2]}
                    makeNewOrder={makeNewOrder}
                    player={player}
                  />
                </>
              )} */}
              {/* <div
                className={`block p-2 rounded hover:bg-gray-900 dark:hover:bg-gray-800 ${
                  player === Member.Polo && "bg-gray-900 dark:bg-gray-800"
                }`}
                onClick={() => {
                  setVideoName(memberInstruments[Member.Polo]);
                  setPlayer(Member.Polo);
                  makeNewOrder(Member.Polo);
                }}
              >
                <h3 className="font-medium text-center text-[#f7efe1]">
                  The amazing Polo !
                </h3>
                <p className="text-sm text-[#f7efe1] dark:text-black text-center">
                  Instrument : Guitar
                </p>
              </div>
              <div
                className={`block p-2 rounded hover:bg-gray-900 dark:hover:bg-gray-800 ${
                  player === Member.Jules && "bg-gray-900 dark:bg-gray-800"
                }`}
                onClick={() => {
                  setVideoName(memberInstruments[Member.Jules]);
                  setPlayer(Member.Jules);
                }}
              >
                <h3 className="font-medium text-center text-[#f7efe1]">
                  The incredible Jules !
                </h3>
                <p className="text-sm text-[#f7efe1] dark:text-gray-400 text-center">
                  Instrument : Saxophone
                </p>
              </div> */}
            </div>
          </div>
        </div>
        <div className="w-3/4 flex flex-col gap-8 justify-center items-center bg-[#1c1f1d]">
          <button onClick={() => setIsVideoTimingSaved(!isVideoTimingSaved)}>
            <p className="text-white">
              Save current video timing after switching
            </p>
          </button>
          <div ref={videoRef}>
            <VideoPlayerNoSSR videoName={videoName} play={isVideoVisible} />
          </div>
        </div>
      </div>
    </main>
  );
}
