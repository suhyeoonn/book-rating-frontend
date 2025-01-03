import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/shared/contexts/AuthContext";
import ProtectedRoute from "@/features/auth/protected-route";

jest.mock("next/navigation", () => {
  const mockPathname = jest.fn(() => "/");
  return {
    useRouter: jest.fn(() => ({
      replace: jest.fn((path) => {
        mockPathname.mockReturnValue(path);
      }),
    })),
    usePathname: mockPathname, // Mock Pathname 반환
    useSearchParams: jest.fn(() => "/"),
  };
});

jest.mock("@/shared/contexts/AuthContext", () => ({
  useAuth: jest.fn(),
}));

describe("인증", () => {
  it("로그인을 하지 않은 상태에서 보호된 페이지 접근 시 로그인 페이지로 리다이렉트된다.", () => {
    const mockReplace = jest.fn();

    // Mock useRouter
    (useRouter as jest.Mock).mockReturnValue({
      replace: mockReplace,
    });

    // Mock useAuth
    (useAuth as jest.Mock).mockReturnValue({
      user: null, // 로그인이 안 된 상태
    });

    expect(usePathname()).toBe("/");

    render(
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>,
    );

    expect(mockReplace).toHaveBeenCalledWith(expect.stringMatching(/login/));
  });

  it("로그인 페이지로 리다이렉트 시 next에 이전 경로가 설정된다.", async () => {
    const mockReplace = jest.fn(); // router.replace를 모킹

    // Mock useRouter
    (useRouter as jest.Mock).mockReturnValue({
      replace: mockReplace,
    });

    expect(usePathname()).toBe("/");

    (usePathname as jest.Mock).mockReturnValue("/my-books");

    expect(usePathname()).toBe("/my-books");

    render(
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>,
    );

    // router.replace가 호출된 URL을 검증
    expect(mockReplace).toHaveBeenCalledWith("/login?next=/my-books");
  });
});
