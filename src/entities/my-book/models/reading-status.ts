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
