"use client";

import { Member, memberDetails } from "@/app/utils";
type ListItemProps = {
  setVideoName: (value: string) => void;
  setPlayer: (value: Member) => void;
  member: Member;
  makeNewOrder: (value: Member) => void;
  player: Member;
};

export default function ListItem({
  setVideoName,
  setPlayer,
  member,
  makeNewOrder,
  player,
}: ListItemProps) {
  console.log(member, "member");
  return (
    <div
      className={`block p-2 rounded hover:bg-gray-900 hover:text-black ${
        player === member && "bg-gray-900 dark:bg-gray-800"
      }`}
      onClick={() => {
        // setVideoName(memberDetails[member].instrument);
        setPlayer(member);
        makeNewOrder(member);
      }}
    >
      <p>hello</p>
      {/* <h3 className="font-medium text-center text-[#f7efe1]">
        {memberDetails[member].title}
      </h3>
      <p className="text-sm text-[#f7efe1] dark:text-black text-center">
        Instrument : {memberDetails[member].instrument}
      </p> */}
    </div>
  );
}
