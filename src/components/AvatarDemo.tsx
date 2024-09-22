import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarDemo() {
  return (
    <Avatar className="h-8 w-8">
      {" "}
      {/* Adjust the size here */}
      <AvatarImage src="https://github.com/RichardLechko.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
