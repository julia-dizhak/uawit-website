import Image from 'next/image'
import React from 'react'
import { type EventType } from '~/lib/sanity.queries/events/types'
import { formatDateAndTime } from '~/lib/sanity.queries/events/utility'

interface EventCardProps {
  event: EventType
}

export default function EventCard({ event }: EventCardProps) {
  const { formattedDate, formattedTime } = formatDateAndTime(event)
  console.log(formattedDate, 'its a date')
  console.log(formattedTime, 'its a time')


  
  return (
    <li className="flex flex-col overflow-hidden border shadow-md cursor-pointer group rounded-xl font-roboto">
      <div className="relative w-full overflow-hidden min-h-[183px] transition-transform duration-200 ease-out border rounded-xl group-hover:scale-105">
        <Image
          src={event.image}
          alt={event.title}
          layout="fill"
          objectFit="cover"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 mx-5 my-3 ">
        <p className="text-xl font-medium text-[#21272A]"> {event.title}</p>
        <p className="mt-3 text-base  text-[#525252] ">
       {event.dateAndTime} <span className="mx-2">•</span>
          <span>{event.dateAndTime?.time}</span>
        </p>
        <address className="text-base not-italic text-black line-clamp-2 s ">
          Address, City
        </address>
      </div>
      <p className="flex items-center mx-5 mb-5 font-medium text-[#057910] ">
        Entrance Fee
      </p>
    </li>
  )
}
