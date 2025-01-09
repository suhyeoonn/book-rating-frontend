import "@testing-library/jest-dom";
import { RatingWithReviewModal } from "./rating-with-review-modal";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("리뷰 등록", () => {
  let queryClient: QueryClient;
  beforeEach(() => {
    queryClient = new QueryClient();
  });
  test("별점을 설정하면 처음 한 번에 한해 한줄평에 기본 텍스트가 표시된다.", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <RatingWithReviewModal open={true} setOpen={jest.fn()} id={1} />
      </QueryClientProvider>,
    );

    const user = userEvent.setup();
    // 별점 선택 (3점)
    const ratingSelect = screen.getByRole("combobox");
    await user.selectOptions(ratingSelect, "3");

    // 한줄평이 기본 텍스트로 설정되었는지 확인
    expect(screen.getByDisplayValue("보통이에요")).toBeInTheDocument();

    // 다시 별점을 변경했을 때 기본 텍스트가 바뀌지 않는지 확인
    const newRatingButton = screen.getByText("4");
    await user.click(newRatingButton);
    expect(screen.getByDisplayValue("보통이에요")).toBeInTheDocument();
  });
});
