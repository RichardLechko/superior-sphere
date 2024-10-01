import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface PriceOption {
  size: string;
  price: string;
}

interface CarouselDemoProps {
  prices: PriceOption[];
}

export function CarouselDemo({ prices }: CarouselDemoProps) {
  return (
    <div className="relative w-full h-16">
      <Carousel className="w-full h-full ">
        <CarouselContent>
          {prices.map((priceOption, index) => (
            <CarouselItem key={index}>
              <div className="w-full py-2">
                <Card className="h-full">
                  <CardContent className="flex items-center justify-center h-full bg-white dark:bg-gray-700 rounded-xl py-4">
                    <span className="font-semibold text-black dark:text-white text-center">
                      {priceOption.size}: {priceOption.price}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute top-0 bottom-0 left-0 z-50 flex items-center ">
          <CarouselPrevious className="left-5 top-10 text-black rounded-full dark:text-white " />
        </div>
        <div className="absolute z-50 top-0 bottom-0 right-0 flex items-center">
          <CarouselNext className="right-5 top-10  text-black rounded-full dark:text-white" />
        </div>
      </Carousel>
    </div>
  );
}
