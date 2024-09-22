"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Loader, LogOut } from "lucide-react";
import { useAuthActions } from "@convex-dev/auth/react";
import { useCurrentUser } from "@/hooks/use-current-user";
export  const UserButton = () => {
    const router = useRouter();
    const {signOut} = useAuthActions()
    const {data, isLoading} =useCurrentUser();

    if (isLoading){
        return<Loader className="size-8 text-rose-500 animate-spin text-muted-foreground"/>
    }
    if(!data){
        return null
    }

const {name, image} = data

const avatarFallback = name!.charAt(0).toUpperCase()
function handlesubmit(){
    signOut().finally(()=>{
        router.refresh()
    })
}
    return(



        <DropdownMenu modal={false} >
        <DropdownMenuTrigger className="outline-none relative">
          <Avatar className="h-[35px] w-[35px] hover:opacity-75 rounded-full transition">
            <AvatarImage alt={name} src={image} className="rounded-md " />
            <AvatarFallback className="bg-gray-100 rounded-md text-black text-xl font-medium">
                {avatarFallback}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" side="right" className="w-60 ">
          <DropdownMenuItem onClick={handlesubmit} className="h-8">
            <LogOut className="size-4 mr-2"/>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
 
    )

};
