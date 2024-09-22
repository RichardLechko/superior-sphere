import { CalendarDays } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const currentYear = new Date().getFullYear();

export function FacebookHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a href="https://www.facebook.com/freedombutchers/" target="_blank">
          <Button className="text-xl font-bold text-blue-600 hover:underline">
            Visit Us on Facebook
          </Button>
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 z-50 bg-white rounded-xl shadow-lg p-4 text-black dark:bg-gray-800 dark:text-white">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/305649286_517149050411504_513730933597754212_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=iwgcLOIdvtkQ7kNvgEFgexP&_nc_ht=scontent-ord5-1.xx&_nc_gid=A5o8Dbuak4_BUmGyU32Hmsi&oh=00_AYDGv7nVt0QAtTvFsqep7HrPYFogXdj4af4N68n2aOVTbA&oe=66F3A75B" />
            <AvatarFallback>FB</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-lg font-semibold">Freedom Butchers</h4>
            <p className="text-sm text-gray-600">
              Follow us for the latest updates and specials!
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Established &copy; {currentYear}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export function InstagramHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a
          href="https://www.instagram.com/freedombutchers/?hl=en"
          target="_blank"
        >
          <Button className="text-xl font-bold text-pink-600 hover:underline">
            Follow Us on Instagram
          </Button>
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 z-50 bg-white rounded-xl shadow-lg p-4 text-black dark:bg-gray-800 dark:text-white">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/305649286_517149050411504_513730933597754212_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=iwgcLOIdvtkQ7kNvgEFgexP&_nc_ht=scontent-ord5-1.xx&_nc_gid=A5o8Dbuak4_BUmGyU32Hmsi&oh=00_AYDGv7nVt0QAtTvFsqep7HrPYFogXdj4af4N68n2aOVTbA&oe=66F3A75B" />
            <AvatarFallback>IG</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-lg font-semibold">Freedom Butchers</h4>
            <p className="text-sm text-gray-600">
              Check out our delicious cuts and behind-the-scenes!
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Established &copy; {currentYear}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export default { FacebookHoverCard, InstagramHoverCard };
