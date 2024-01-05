type MemberInfo = {
  title: string;
  video: string;
  description: string;
};

export type MemberName = "Polo" | "Marc" | "Jules";

export const memberDetails: Record<MemberName, MemberInfo> = {
  Marc: {
    title: "Our talented Marc !",
    video: "macmiller",
    description: "Marc is a talented guy",
  },
  Polo: {
    title: "The amazing Polo !",
    video: "fkj",
    description: "Polo is an amazing guy",
  },
  Jules: {
    title: "The incredible Jules !",
    video: "saxophone",
    description: "Jules is an incredible guy",
  },
};

export interface VideoPlayerProps {
  videoName: string | null;
  play: boolean;
}
