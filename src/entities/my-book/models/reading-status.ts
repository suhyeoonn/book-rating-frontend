export enum ReadingStatusEnum {
  READY,
  READING,
  STOPPED,
  FINISHED,
  NONE = -1,
}

export const readingStatusConfig = {
  0: { label: "읽기 전", color: "text-yellow-700" },
  1: { label: "읽는 중", color: "text-red-700" },
  2: { label: "중단", color: "text-gray-700" },
  3: { label: "완료", color: "text-green-700" },
} as const;

export const readingStatusList = [
  {
    id: ReadingStatusEnum.READY,
    label: readingStatusConfig[0].label,
  },
  {
    id: ReadingStatusEnum.READING,
    label: readingStatusConfig[1].label,
  },
  {
    id: ReadingStatusEnum.STOPPED,
    label: readingStatusConfig[2].label,
  },
  {
    id: ReadingStatusEnum.FINISHED,
    label: readingStatusConfig[3].label,
  },
];
