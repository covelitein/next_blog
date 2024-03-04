import { cn } from "@/lib/utils"


export default function Container({ children, className } : any) {
    return (
        <div className={cn("max-w-6xl mx-auto max-lg:px-5", className)}>
            {children}
        </div>
    )
}