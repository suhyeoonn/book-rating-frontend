import "@testing-library/jest-dom";

import { AddMyListButton } from "@/features/my-books/add-my-list";
import { useAuth } from "@/shared/contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import { myBookApi } from "@/entities/my-book";

const book = {
  id: 10,
  isbn: "9791191905236",
  title: "개발자 원칙",
  thumbnail:
    "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F6233152%3Ftimestamp%3D20240530180629",
  contents:
    "“나도 테크 리더가 될 수 있을까? 어떻게 선배 개발자들처럼 성장할 수 있을까? 3년 10년 후에도 개발자로 살아갈 수 있을까? 팀워크는 도대체 어떻게 맞춰야 하는 걸까?” 개발자로 살아가면서 하루에도 천 번을 되묻는 물음에 컬리, 레몬트리, 카카오, 코드스쿼드, 무신사, 몰로코, 데이블, 인프런, 패스트캠퍼스 테크 리더 9명이 답합니다. 지금까지 만나 볼 수 없었던 생존과 성장의 원칙에서 자신만의 해답을 찾아보세요.",
  datetime: "2022-12-19T06:00:00.000Z",
  url: "https://search.daum.net/search?w=bookpage&bookId=6233152&q=%EA%B0%9C%EB%B0%9C%EC%9E%90+%EC%9B%90%EC%B9%99",
  authors: "박성철, 강대명, 공용준, 김정, 박미정, 박종천",
  publisher: "골든래빗(주)",
  averageRating: 0,
  tags: [],
  reviewCount: 0,
};

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(), // push 메서드 Mock
  })),
}));

jest.mock("@/shared/contexts/AuthContext", () => ({
  useAuth: jest.fn(),
}));

jest.mock("@/entities/my-book", () => ({
  myBookApi: {
    bookQueries: {
      exists: jest.fn((isbn, userId) => ({
        queryKey: ["userBooks", isbn, userId],
        queryFn: jest.fn().mockResolvedValue({ exists: false }),
        enabled: !!userId,
      })),
      all: jest.fn(() => ["userBooks"]),
    },
    postBook: jest.fn(),
  },
}));

const queryClient = new QueryClient();

describe("Search > 상세 페이지", () => {
  beforeEach(() => {
    // QueryClient 초기화
    queryClient.clear();
  });

  test("로그인을 하지 않았다면 추가 버튼이 비활성화되어야 한다.", () => {
    // 사용자 로그인 상태를 null로 mock 설정
    (useAuth as jest.Mock).mockReturnValue({ user: null });

    // 컴포넌트 렌더링
    render(
      <QueryClientProvider client={queryClient}>
        <AddMyListButton book={book} />
      </QueryClientProvider>,
    );

    // 버튼이 비활성화 상태인지 검사
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  test("로그인을 했고 리스트에 추가되지 않았다면 버튼이 활성화된다.", async () => {
    (useAuth as jest.Mock).mockReturnValue({
      user: { id: 1, name: "Test User" },
    });
    (myBookApi.bookQueries.exists as jest.Mock).mockReturnValue({
      queryKey: ["userBooks", "12345", 1],
      queryFn: jest.fn().mockResolvedValue({ exists: false }),
      enabled: true,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <AddMyListButton book={book} />
      </QueryClientProvider>,
    );

    await waitFor(() => {
      const button = screen.getByText("내 리스트에 추가");
      expect(button).toBeEnabled();
    });
  });

  test("로그인을 했고 리스트에 추가되었다면 버튼이 비활성화된다.", async () => {
    (useAuth as jest.Mock).mockReturnValue({
      user: { id: 1, name: "Test User" },
    });
    (myBookApi.bookQueries.exists as jest.Mock).mockReturnValue({
      queryKey: ["userBooks", "12345", 1],
      queryFn: jest.fn().mockResolvedValue({ exists: true }),
      enabled: true,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <AddMyListButton book={book} />
      </QueryClientProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText("내 리스트에 추가됨")).toBeDisabled();
    });
  });
});
