import "@testing-library/jest-dom";
import { ReviewComment } from "./review-comment";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const review = {
  bookId: 1,
  id: 1,
  rating: 4,
  content: "대체로 만족스러운 책이에요",
  updatedAt: "2024-12-29T20:06:49.028Z",
  userId: 1,
};

const queryClient = new QueryClient();

describe("한줄평", () => {
  test("작성된 한줄평이 없으면 '-'가 표시된다", () => {
    render(<ReviewComment review={null} />);

    expect(screen.getByText("-")).toBeInTheDocument();
  });

  test("한줄평이 있으면 내용과 수정 버튼이 표시된다", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ReviewComment review={review} />
      </QueryClientProvider>,
    );

    expect(screen.getByText(review.content)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("수정 버튼을 클릭하면 수정 모달이 열린다", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ReviewComment review={review} />
      </QueryClientProvider>,
    );

    const user = userEvent.setup();
    const editButton = screen.getByRole("button");
    await user.click(editButton);

    expect(screen.getByRole("alertdialog")).toBeInTheDocument();
  });
});
