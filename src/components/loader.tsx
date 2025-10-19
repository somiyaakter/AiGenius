import React from "react";
import { LoaderIcon } from "lucide-react";

export default function loader() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-y-4">
         <LoaderIcon />
          <p className="text-muted-foreground text-sm">
              AIGenius is thinking...
          </p>
    </div>
  );
}
