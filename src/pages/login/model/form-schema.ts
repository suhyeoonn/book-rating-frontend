import { z } from "zod";

export const formSchema = z.object({
  username: z.string().min(1, {
    message: "아이디를 입력하세요.",
  }),
  password: z.string().min(1, {
    message: "패스워드를 입력하세요.",
  }),
});

export const defaultValues = {
  username: "",
  password: "",
};
