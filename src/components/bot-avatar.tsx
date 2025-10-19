import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { useUser } from "@/hooks/use-user"

export default function BotAvatar() {
  const { user } = useUser();
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src={user?.profileImageUrl} />
      <AvatarFallback>
        {user?.firstname?.charAt(0)}
        {user?.lastname?.charAt(0)}
      </AvatarFallback>
    </Avatar>
  )
}
