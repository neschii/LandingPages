import Link from "next/link";
import { Container } from "../shared/Container";
import { Button } from "../ui/button";
import { Card} from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { eventsp } from "./PageData";


export default function InfoContent() {
return ( 
        
      <main className="min-h-screen w-full flex items-center justify-end p-4 relative bg-zinc-50 dark:bg-zinc-900 z-20">  
        <Container>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="max-w-7xl mx-auto"
        >
          <CarouselContent className="-mt-0 h-[800px]">
            {eventsp.map((eventsp) => (
              <CarouselItem
                key={eventsp.id}
                className="pl-2 md:pl-9 md:basis-1/2 lg:basis-1/3"
              >
                <div className="relative group">
                  <Card className="transition-all duration-300 group-hover:scale-105 overflow-hidden border-none">
                    <div className="relative aspect-[3/4]">
                      <div className="absolute inset-0 bg-black/75 group-hover:bg-black/20 transition-colors duration-300" />
                      <img
                        src={eventsp.image}
                        alt={eventsp.title}
                        className="object-cover w-full h-full"
                      />    
                     <Link
                        href="/eventos"> 
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="font-semibold text-4xl text-yellow-400 group-hover:text-white transition-colors duration-300 text-center px-4">
                          {eventsp.title}
                        </h3>
                      </div> 
                    </Link>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
            <div className="text-yellow-400 ">
          <CarouselPrevious className=" hover:bg-yellow-400  "/>
          <CarouselNext className=" hover:bg-yellow-400"/>
          </div>
        </Carousel>
      </Container>
    </main>
  );
}