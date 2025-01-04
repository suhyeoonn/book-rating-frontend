import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { UpdateModal } from "./update-modal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import userEvent from "@testing-library/user-event";

const queryClient = new QueryClient();
const user = userEvent.setup();

describe("한줄평 수정", () => {
  test("작성된 한줄평이 없으면 수정 버튼이 비활성화된다", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <UpdateModal reviewId={1} content="good" open setOpen={() => {}} />
      </QueryClientProvider>,
    );

    const saveButton = screen.getByRole("button", { name: "저장" });
    expect(saveButton).toBeEnabled();

    const input = screen.getByRole("textbox");
    await user.clear(input);

    expect(saveButton).toBeDisabled();
  });
});
