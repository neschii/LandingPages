import { IconCalendar, IconPin } from "@tabler/icons-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { events } from "./eventosData";

       
export function EventCarousel() {
return ( 
 <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4  ">
            {events.map((event) => (
              <CarouselItem key={event.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden border-none  transition-transform duration-300 hover:scale-105">
                  <div className="relative aspect-[4/3]">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <IconPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <IconCalendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-yellow-400 dark:bg-neutral-800 hover:bg-yellow-300/90 text-zinc-700 dark:text-zinc-300 dark:hover:bg-neutral-600 
                      ">Ver detalhes</Button>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
          </div>
        </Carousel>

)
}
