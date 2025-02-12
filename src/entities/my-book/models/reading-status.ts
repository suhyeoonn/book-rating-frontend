export enum ReadingStatusEnum {
  READY,
  READING,
  STOPPED,
  FINISHED,
}

export const readingStatusList = [
  {
    id: ReadingStatusEnum.READY,
    label: "읽기 전",
  },
  {
    id: ReadingStatusEnum.READING,
    label: "읽는 중",
  },
  {
    id: ReadingStatusEnum.STOPPED,
    label: "중단",
  },
  {
    id: ReadingStatusEnum.FINISHED,
    label: "완료",
  },
];

export const readingStatusConfig = {
  0: { text: readingStatusList[0].label, color: "text-yellow-700" },
  1: { text: readingStatusList[1].label, color: "text-red-700" },
  2: { text: readingStatusList[2].label, color: "text-gray-700" },
  3: { text: readingStatusList[3].label, color: "text-green-700" },
} as const;
