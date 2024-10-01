import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area"; // Ensure this path is correct
import { Separator } from "@/components/ui/separator"; // Ensure this path is correct

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border overflow-auto">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag, index) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            {/* Only add separator if not the last item */}
            {index < tags.length - 1 && <Separator className="my-2" />}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
