import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import YelpReview from "./yelpReviews";

const CarouselYelp = ({ reviews }) => {
  return (
    <div className="relative w-full">
      <Carousel>
        <CarouselContent>
          {reviews.map((embedCode, index) => (
            <CarouselItem key={index}>
              <div className="flex justify-center items-center">
                <Card className="w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl h-auto shadow-lg">
                  <CardContent className="flex items-center justify-center h-full dark:bg-gray-800 rounded-xl overflow-hidden">
                    <YelpReview embedCode={embedCode} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute top-0 bottom-0 left-1/4 flex items-center max-[1440px]:left-[20%] max-[1024px]:left-0 max-[640px]:ml-2">
          <CarouselPrevious className="w-8 h-8 sm:w-10 sm:h-10 top-1/3 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg transition hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600" />
        </div>
        <div className="absolute top-0 bottom-0 right-1/4 flex items-center max-[1440px]:right-[20%] max-[1024px]:right-0 max-[640px]:mr-2">
          <CarouselNext className="w-8 h-8 sm:w-10 sm:h-10 top-1/3 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg transition hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselYelp;
