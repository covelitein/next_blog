import { z } from "zod";

export const formSchema = z.object({
    title: z
      .string()
      .min(2, { message: "title should be more than two letters" })
      .max(30, { message: "title should not be more 30 letters" }),
      img:z
      .string()
      .url({ message: "Invalid url" }),
    content: z.string().min(20, {
      message: "content should be more than 20 letters long",
    }),
  });