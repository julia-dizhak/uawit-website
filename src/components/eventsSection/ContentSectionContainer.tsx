import React, { type ReactNode } from 'react'
import ContentSectionButton from './ContentSecctionButton'

interface ContentSectionContainerProps<T> {
  title: string
  description: string
  items: T[]
  children: (item: T) => ReactNode
}

export default function ContentSectionContainer<T>({
  title,
  description,
  items,
  children,
}: ContentSectionContainerProps<T>) {
  const sortedEvents = [...items]
    .sort(
      (a, b) =>
        new Date(b.lastAddedDate).getTime() -
        new Date(a.lastAddedDate).getTime(),
    )
    .slice(0, 3)

  return (
    <section className=" py-16 px-6 sm:px-[6.563rem]">
      <h2 className="font-bold text-center text-[42px] text-[#21272A] font-roboto">
        {title}
      </h2>
      <p className="text-center font-roboto color-[#21272A] mt-4 font-normal text-lg mb-[3.75rem]">
        {description}
      </p>

      <div className="grid grid-cols-1 gap-[3.75rem] md:grid-cols-2 lg:grid-cols-3">
        {sortedEvents.map((item, index) => (
          <div key={index}>{children(item)}</div>
        ))}
      </div>
      {/* <ContentSectionButton redirectUrl={`/events/${event.slug}`}>{`See more ${title}`}</ContentSectionButton> */}

      <ContentSectionButton>See more {title}</ContentSectionButton>
    </section>
  )
}
