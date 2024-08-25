'use client'
import Header from "@/components/shared/Header"
import ScheduleSuccess from "@/components/schedules/ScheduleSuccess"

export default function PageSchedule() { 
  return (
    <div className="flex flex-col bg-red-500">
      <Header 
      title="Agendamento de Serviços"
      description="Seu horário está garantido e será um prazer te atender!"
      />
    <div className="container flex flex-col justify-around items-center py-10 gap-1">
         <ScheduleSuccess />
  </div>
  </div>
  )
}