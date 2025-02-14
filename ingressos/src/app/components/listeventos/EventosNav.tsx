"use client";

import { EventCarousel } from "./EventCarousel";
import { SearchBar } from "./SearchBar";


export default function EventosNav() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center pt-36 p-4 bg-orange-100/30 dark:bg-dark-bg">
      <div className="p-2 ">
        
        <div className="max-w-[calc(60vw)] sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
          <div className="bg-white dark:bg-neutral-800 rounded-lg md:rounded-xl shadow-md md:shadow-xl p-4 sm:p-6 md:p-8">
             <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-4">
          Encontre o lugar perfeito para voce
        </h1>
             <SearchBar/>
            <h1 className="text-1xl sm:text-2xl md:text-2xl font-bold text-yellow-400 text-left mt-8">
          Eventos populares
        </h1>
          <h2 className="text-1xl mb-8 text-left"> Não perca esses eventos que estão em alta </h2>

          <EventCarousel/>
      </div>
    </div>
  </div>  </div>
  );
}