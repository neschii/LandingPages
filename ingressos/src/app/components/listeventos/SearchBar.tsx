import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { CalendarIcon, MapPinIcon, Search } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { events, EventosData } from "./eventosData";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface SearchFilters {
  location: string;
  type: string;
  date: Date | undefined;
  title: string;
}

const ITEMS_PER_PAGE = 3;

export function SearchBar() {
  const [filteredEvents, setFilteredEvents] = useState<EventosData[]>(events);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    type: '',
    date: undefined,
    title: '',
  });

  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentEvents = filteredEvents.slice(startIndex, endIndex);

  const updateFilters = (newFilters: Partial<SearchFilters>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    setCurrentPage(1); // Reset to first page when filters change
    
    const filtered = events.filter(event => {
      const matchLocation = !updatedFilters.location || 
        event.location.toLowerCase().includes(updatedFilters.location.toLowerCase());
      
      const matchType = !updatedFilters.type || 
        event.type.toLowerCase() === updatedFilters.type.toLowerCase();
      
      const matchTitle = !updatedFilters.title || 
        event.title.toLowerCase().includes(updatedFilters.title.toLowerCase());
      
      let matchDate = true;
      if (updatedFilters.date) {
        const formattedSearchDate = format(updatedFilters.date, "dd 'de' MMM", { locale: ptBR });
        matchDate = event.date.includes(formattedSearchDate);
      }

      return matchLocation && matchType && matchTitle && matchDate;
    });

    setFilteredEvents(filtered);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-4 rounded-xl bg-zinc-50 dark:bg-zinc-900">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <MapPinIcon className="absolute left-4 top-2 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Localidade"
            className="pl-10"
            value={filters.location}
            onChange={(e) => updateFilters({ location: e.target.value })}
          />
        </div>

        <Select
          value={filters.type}
          onValueChange={(value) => updateFilters({ type: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Tipo de evento" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Festa">Festa</SelectItem>
            <SelectItem value="Evento">Evento</SelectItem>
            <SelectItem value="Show">Show</SelectItem>
            <SelectItem value="Festival">Festival</SelectItem>
            <SelectItem value="Palestra">Palestra</SelectItem>
          </SelectContent>
        </Select>

        <div className="relative">
          <Search className="absolute left-4 top-2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Nome do evento"
            className="pl-10"
            value={filters.title}
            onChange={(e) => updateFilters({ title: e.target.value })}
          />
        </div> 
        
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={`w-full justify-start text-left font-normal bg-zinc-50 dark:bg-zinc-900 ${
                !filters.date && 'text-muted-foreground'
              }`}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {filters.date ? (
                format(filters.date, "dd 'de' MMM", { locale: ptBR })
              ) : (
                <span>Selecione uma data</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={filters.date}
              onSelect={(date) => updateFilters({ date })}
              initialFocus
              locale={ptBR}
            />
          </PopoverContent>
        </Popover> 
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {currentEvents.map((event) => (
          <div key={event.id} className="p-4 transition-transform duration-300 hover:scale-105 rounded-lg">
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-48 object-cover rounded-lg mb-4 "
            />
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <p className="text-gray-600">{event.location}</p>
            <p className="text-gray-600">{event.date}</p>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => handlePageChange(currentPage - 1)}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => handlePageChange(page)}
                  isActive={currentPage === page}
                  className="cursor-pointer"
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            
            <PaginationItem>
              <PaginationNext 
                onClick={() => handlePageChange(currentPage + 1)}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}