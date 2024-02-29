import React from 'react'

import EventCard from './EventCard'
import { EventType, EventsListType } from '~/lib/sanity.queries/events/types'

type Props = {
  events: EventsListType
}
export default function ContentSection({ events }: Props) {
  // console.log('events n component', events, typeof events);
  // TODO: sort - > cards by date;
  return (
    <section className="py-16 ">
      <h2 className="font-bold text-center text-[42px]  text-[#21272A] font-roboto ">
        Event Title
      </h2>
      <p className="text-center font-roboto color-[#21272A] mt-4 font-normal text-lg  mb-[3.75rem]">
        Paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium doloribus et nulla saepe ullam quibusdam cum laudantium
        voluptatem.
      </p>

      <ul className="container   grid grid-cols-1 gap-[3.75rem]  md:grid-cols-2 lg:grid-cols-3  ">
        {events.map((event: EventType) => (
          <EventCard event={event} key={event.title} />
        ))}
      </ul>
      <button className="mt-[3.75rem]">See more Events </button>
    </section>
  )
}
