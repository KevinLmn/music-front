"use client";

import Navbar from "@/components/Navbar/Navbar";
import SimpleSlider from "@/components/Slider/Slider";
import styles from "./page.module.scss";

export default function Home() {
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
          <div className="flex flex-col justify-center items-center gap-6 border-white border-4 p-8">
            <p className="text-white text-5xl">Welcome to our band page</p>
            <p className="text-white text-3xl">
              Listen to our music for free !
            </p>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div
          className={`hello flex flex-col justify-center items-center ${styles.textBox}`}
        >
          <p className="text-white text-5xl">Welcome to our band page</p>
          <p className="text-white text-3xl">Listen to our music for free !</p>
        </div>
      </div>
    </main>
  );
}
