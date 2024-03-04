"use client"
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

export default function AddButton({  }){
    const router = useRouter()
    const handleNavigation = ()=> {
        router.replace("/posts/create")
    }
    return (
        <Button className="fixed bottom-5 right-5 p-3 rounded-md" onClick={handleNavigation}>
            <Plus className="text-xl "/>
        </Button>
    )
}