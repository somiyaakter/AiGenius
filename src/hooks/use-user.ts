"use client";

import { useSession } from "@/lib/auth-client";

export const useUser = () => {
  const { data: session } = useSession();
  return { user: session?.user };
};
