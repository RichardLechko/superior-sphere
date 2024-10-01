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
    <div>
      <Carousel>
        <CarouselContent>
          {reviews.map((embedCode, index) => (
            <CarouselItem key={index}>
              <div className="h-full flex justify-center items-center">
                <Card className="w-full max-w-3xl h-full shadow-lg">
                  <CardContent className="flex items-center justify-center h-full dark:bg-gray-800 rounded-xl">
                    <YelpReview embedCode={embedCode} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute top-0 bottom-0 left-0 flex items-center">
          <CarouselPrevious className="left-96 w-10 h-10 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg transition hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600" />
        </div>
        <div className="absolute top-0 bottom-0 right-0 flex items-center">
          <CarouselNext className="right-96 w-10 h-10 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg transition hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselYelp;
