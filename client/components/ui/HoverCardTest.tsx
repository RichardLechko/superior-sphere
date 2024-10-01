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
          <Button className="text-xl font-bold bg-[#1877F2] text-white dark:bg-[#3B5998] hover:bg-[#165EAB] dark:hover:bg-[#165EAB] hover:underline focus:outline-none focus:ring-2 focus:ring-[#1877F2] dark:focus:ring-[#3B5998]">
            Visit Us on Facebook
          </Button>
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 z-50 bg-white rounded-xl shadow-lg p-4 text-black dark:bg-gray-800 dark:text-white">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/images/freedombutchers-logo.jpg" />
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
          <Button className="text-xl text-white hover:underline focus:outline-none font-bold bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] dark:bg-gradient-to-r dark:from-[#D34600] dark:via-[#BF0278] dark:to-[#8134AF]">
            Follow Us on Instagram
          </Button>
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 z-50 bg-white rounded-xl shadow-lg p-4 text-black dark:bg-gray-800 dark:text-white">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/images/freedombutchers-logo.jpg" />
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

export function YelpHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a
          href="https://www.yelp.com/biz/freedom-butchers-orland-park"
          target="_blank"
        >
          <Button className="text-xl hover:underline focus:outline-none font-bold bg-[#AF0606] text-white dark:bg-[#850404] hover:bg-[#9E0B0B] dark:hover:bg-[#9E0B0B]">
            Leave us a Review on Yelp
          </Button>
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 z-50 bg-white rounded-xl shadow-lg p-4 text-black dark:bg-gray-800 dark:text-white">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/images/freedombutchers-logo.jpg" />
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

export function LinkedInHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a
          href="https://www.linkedin.com/company/freedom-butchers/about/"
          target="_blank"
        >
          <Button className="text-xl font-bold hover:underline focus:outline-none text-white bg-[#0077B5] dark:bg-[#004b75] hover:bg-[#005582] dark:hover:bg-[#005582]">
            Connect with us on LinkedIn
          </Button>
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 z-50 bg-white rounded-xl shadow-lg p-4 text-black dark:bg-gray-800 dark:text-white">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/images/freedombutchers-logo.jpg" />
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

export default { FacebookHoverCard, InstagramHoverCard, YelpHoverCard };
