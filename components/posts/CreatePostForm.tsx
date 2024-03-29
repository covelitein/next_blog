"use client";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import useFetch from "http-react";
import { z } from "zod";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { formSchema } from "@/schemaValidations";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import Container from "../Container";
import { useState } from "react";

type FormSchema = z.infer<typeof formSchema>;

export default function CreatePost() {
  const { toast } = useToast();
  const router = useRouter();
  const { data: session } = useSession()
  const [ sessionEmail, setSessionEmail ] = useState<any>("session?.user?.email")

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      img: "",
      content: "",
    },
  });

  const {
    reFetch: submitPost,
    loading: isSubmitting,
    error,
  } = useFetch("/posts", {
    method: "POST",
    auto: false,
    body: form.getValues(),
    onResolve() {
      toast({
        title: "Successful",
        description: "blog created successfully",
        action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
      });
      router.replace("/");
      router.refresh();
    },
  });

  const onSubmit = session ? form.handleSubmit(submitPost) : (e:any) => {
    e.preventDefault()
    toast({
      variant:'destructive',
      title: "Notice",
      description: "Please login first",
    });
  }
 

  return (
    <Container className="max-w-4xl mt-7">
      <Form {...form}>
        {error && <>{error}</>}
        <form onSubmit={onSubmit} className="w-full space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="img"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Img URL</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    className="resize-none h-[15rem]"
                    {...field}
                    onChange={(e) => {
                      const heightOffset = 3;
                      e.currentTarget.style.height = "auto";
                      e.currentTarget.style.height =
                        e.currentTarget.scrollHeight + heightOffset + "px";

                      field.onChange(e);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button disabled={isSubmitting} type="submit">
              {isSubmitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Create Post
            </Button>
          </div>
        </form>
      </Form>
    </Container>
  );
}