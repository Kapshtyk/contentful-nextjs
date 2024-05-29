import { Post } from "@/lib/graphql/generate/graphql";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel";
import { Card } from "@/widgets/card/card";

interface CardsCarouselProps {
  slides: Post[];
}

export const CardsCarousel = ({ slides }: CardsCarouselProps) => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {slides.map((post, index) => (
          <CarouselItem key={index}>
            <div>
              <Card post={post} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-background" />
      <CarouselNext className="bg-background" />
    </Carousel>
  );
};
