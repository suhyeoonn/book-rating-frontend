import { Tag } from "@/shared/types";
import { Badge } from "./badge";

export default function TagGroup({ tags }: { tags: Tag[] }) {
  return <></>; // TODO: 백엔드 태그 기능 구현 필요
  return tags.map((tag) => (
    <Badge key={tag.id} variant="outline">
      {tag.name}
    </Badge>
  ));
}
