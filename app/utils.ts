export enum Member {
  Marc,
  Polo,
  Jules,
}

type MemberInfo = {
  title: string;
  instrument: string;
};

export const memberDetails: Record<Member, MemberInfo> = {
  [Member.Marc]: {
    title: "Our talented Marc !",
    instrument: "piano",
  },
  [Member.Polo]: {
    title: "The amazing Polo !",
    instrument: "guitar",
  },
  [Member.Jules]: {
    title: "The incredible Jules !",
    instrument: "saxophone",
  },
};
