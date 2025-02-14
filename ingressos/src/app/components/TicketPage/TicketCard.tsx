"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { IconTrash  } from "@tabler/icons-react";
import { tickets } from "./TicketData";

export default function TicketNav() {
  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center p-4 relative bg-orange-100/30 dark:bg-dark-bg">
       <div className="bg-white dark:bg-neutral-800 rounded-lg md:rounded-xl shadow-md md:shadow-xl p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-600 dark:text-neutral-400 e text-center mb-4">
          Eventos que estou participando!
        </h1>
        <div className="gap-8 relative z-10 grid grid-cols-3">
            <Card key={tickets.id} className="h-64 w-96"> 
              <CardHeader>
                <CardTitle>{tickets.title}</CardTitle>
                <CardDescription>Maracanã / 20.1.25 </CardDescription>
              </CardHeader>
              <CardContent> 
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
              </CardContent>
               <IconTrash/>
            </Card>
            <Card className="h-64 w-96"> 
              <CardHeader>
                <CardTitle>Show Taylor Swift</CardTitle>
                <CardDescription>Allianz Parque / 18.09.24 /</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
              </CardContent>
              <CardFooter><strong> LADO A </strong> </CardFooter>
               <IconTrash/>
            </Card>
              <Card className="h-64 w-96"> 
              <CardHeader>
                <CardTitle>Show Linkin Park</CardTitle>
                <CardDescription>Maracanã</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
              </CardContent>
              <IconTrash/>
            </Card>

        </div>
      </div>
    </div>
    </>
  );
}
