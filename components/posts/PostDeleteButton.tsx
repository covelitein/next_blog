"use client";

import useFetch from "http-react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";

export default function PostDeleteButton({ postId }: any) {
  const router = useRouter();
  const { toast } = useToast();

  const { reFetch: handleDelete, loading: isDeleting } = useFetch(
    "/posts/[postId]",
    {
      method: "DELETE",
      id: {
        postId,
      },
      auto: false,
      params: {
        postId,
      },
      onResolve() {
        toast({
            title: "Successful",
            description: "blog deleted successfully",
            action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
          });
        router.replace("/");
        router.refresh();
      },
    }
  );

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-red-500 hover:bg-red-400">
          {isDeleting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <TrashIcon className="text-white text-sm" />
          )}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your post
            from our store.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-red-500" onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
