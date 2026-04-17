"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/hooks/use-user";

export default function UserAvatar() {
  const { user } = useUser();
  const initials =
    (user?.name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase()) || "U";

  return (
    <Avatar className="h-8 w-8">
      {user?.image && <AvatarImage src={user.image} alt={user.name ?? "User"} />}
      <AvatarFallback className="bg-primary/10 text-xs font-medium text-primary">
        {initials}
      </AvatarFallback>
    </Avatar>
  );
}
