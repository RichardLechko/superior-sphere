import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselDemoProps } from "@/types";

export function CarouselDemo({ prices }: CarouselDemoProps) {
  return (
    <div className="relative w-full h-16">
      <Carousel className="w-full h-full">
        <CarouselContent className="flex">
          {prices.map((priceOption, index) => (
            <CarouselItem key={index} className="w-full">
              <div className="w-full py-2 px-1 md:px-2">
                <Card className="h-full">
                  <CardContent className="flex items-center justify-center h-full bg-white dark:bg-gray-700 rounded-xl py-4 max-[1024px]:py-2">
                    <span className="font-semibold text-black dark:text-white text-center text-base max-[1024px]:text-sm">
                      {priceOption.size}: {priceOption.price}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute top-1/4 bottom-0 ml-14 z-50 flex items-center max-[1024px]:top-[-10%]">
          <CarouselPrevious className="w-8 h-8 text-black dark:text-white rounded-full p-1 max-[1024px]:w-4 max-[1024px]:h-4" />
        </div>
        <div className="absolute right-0 mr-14 top-1/4 bottom-0 z-50 flex items-center max-[1024px]:top-[-10%]">
          <CarouselNext className="w-8 h-8 text-black dark:text-white rounded-full p-1 max-[1024px]:w-4 max-[1024px]:h-4" />
        </div>
      </Carousel>
    </div>
  );
}
