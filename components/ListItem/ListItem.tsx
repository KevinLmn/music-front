"use client";

import { MemberName, memberDetails } from "@/app/utils";

type ListItemProps = {
  setVideoName: (value: string) => void;
  setPlayer: (value: MemberName) => void;
  member: MemberName;
  makeNewOrder: (value: MemberName) => void;
  player: MemberName;
};

export default function ListItem({
  setVideoName,
  setPlayer,
  member,
  makeNewOrder,
  player,
}: ListItemProps) {
  return (
    <button
      className={`block p-2 rounded text-[#f7efe1] hover:text-[#966F33] hover:bg-black ${
        player === member && "bg-gray-900 dark:bg-gray-800 "
      }`}
      onClick={() => {
        setVideoName(memberDetails[member].video);
        setPlayer(member);
        makeNewOrder(member);
      }}
    >
      <h3 className="font-medium text-center">{memberDetails[member].title}</h3>
      <p className="text-sm dark:text-black text-center">
        {memberDetails[member].description}
      </p>
    </button>
  );
}
