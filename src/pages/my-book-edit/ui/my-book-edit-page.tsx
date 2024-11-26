import { Textarea } from "@/shared/ui/textarea";
import { Input } from "@/shared/ui/input";
import React from "react";
import StarGroup from "@/shared/ui/star-group";

interface Props {
  id: number;
}
export const MyBookEditPage = ({ id }: Props) => {
  return (
    <div>
      <h2>title</h2>
      <form action="">
        <div>저자</div>
        <div>상태</div>
        <div>
          평점
          <StarGroup rating={0} />
        </div>
        <div>추가일</div>
        <div>완료일</div>
        {/* Tags */}
        {/* <div></div> */}
        <div>
          <Textarea placeholder="contents" />
        </div>
      </form>
    </div>
  );
};
