import "@testing-library/jest-dom";
import { ReviewComment } from "./review-comment";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
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

jest.mock("@/entities/review", () => ({
  reviewApi: {
    reviewQueries: {
      get: jest.fn((id) => ({
        queryKey: ["reviews", id],
        queryFn: async () => review,
      })),
      all: jest.fn(() => ["reviews"]),
    },
    postBook: jest.fn(),
  },
}));

describe("한줄평", () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient();
  });

  test("작성된 한줄평이 없으면 '-'가 표시된다", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ReviewComment id={undefined} />
      </QueryClientProvider>,
    );

    expect(screen.getByText("-")).toBeInTheDocument();
  });

  test("한줄평이 있으면 내용과 수정 버튼이 표시된다", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ReviewComment id={1} />
      </QueryClientProvider>,
    );

    await waitFor(() => {
      expect(
        screen.getByText("대체로 만족스러운 책이에요"),
      ).toBeInTheDocument();
    });
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("수정 버튼을 클릭하면 수정 모달이 열린다", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ReviewComment id={1} />
      </QueryClientProvider>,
    );

    const user = userEvent.setup();
    const editButton = await screen.findByRole("button");
    await user.click(editButton);

    expect(screen.getByRole("alertdialog")).toBeInTheDocument();
  });

  it("모달을 닫았다가 다시 열었을 때, 원래의 코멘트가 유지되어야 한다", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ReviewComment id={1} />
      </QueryClientProvider>,
    );

    const user = userEvent.setup();
    await user.click(await screen.findByRole("button"));
    expect(screen.getByRole("alertdialog")).toBeInTheDocument();

    let inputElement = await screen.findByRole("textbox");
    expect(inputElement).toHaveValue(review.content);

    // 코멘트 내용 지우기
    await user.clear(inputElement);
    expect(inputElement).toHaveValue("");

    // 모달 닫기
    await user.click(screen.getByRole("button", { name: /취소/i }));

    // 모달 다시 열기
    await user.click(screen.getByRole("button"));

    inputElement = await screen.findByRole("textbox");
    expect(inputElement).toHaveValue(review.content);
  });
});
