import { z } from "zod";

export const formSchema = z.object({
    title: z
      .string()
      .min(2, { message: "title should be more than two letters" })
      .max(100, { message: "title should not be more 100 letters" }),
      img:z
      .string()
      .url({ message: "Invalid url" }),
    content: z.string().min(20, {
      message: "content should be more than 20 letters long",
    }),
  });