'use client'
import Image, { type StaticImageData } from 'next/image'
import React from 'react'
import { type ReactNode, useState } from 'react'

interface ContentSectionContainerProps<T> {
  title: string
  description: string
  items: T[]
  children: (item: T, isEventPassed: boolean) => ReactNode
  sortFunction?: (a: T, b: T) => number
  button?: React.ReactElement<{ onClick: () => void }>
  currentDate: Date
  image: StaticImageData
}

export default function ContentSectionContainer<
  T extends { dateAndTime: string },
>({
  title,
  description,
  items,
  children,
  sortFunction,
  button,
  currentDate,
  image,
}: ContentSectionContainerProps<T>) {
  const [displayCount, setDisplayCount] = useState(3)

  const handleLoadMore = () => {
    setDisplayCount((prevCount) => prevCount + 3)
  }
  const sortedItems = sortFunction
    ? [...items].sort(sortFunction).slice(0, displayCount)
    : items.slice(0, displayCount)

  const showLoadMoreButton = items.length > displayCount

  return (
    <section className="max-w-screen-xl  px-6 mx-auto font-manrope py-[100px] relative ">
      <h2 className="font-medium text-center text-[48px] text-primaryBlack ">
        {title}
      </h2>
      <p className="text-center text-primaryGray mt-3 font-light text-base leading-[22px] mb-[56px]  max-w-[611px]  mx-auto">
        {description}
      </p>

      <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2 lg:grid-cols-3">
        {sortedItems.map((item, index) => (
          <div key={index}>
            {children(item, new Date(item.dateAndTime) < currentDate)}
          </div>
        ))}
      </div>
      {showLoadMoreButton &&
        button &&
        React.cloneElement(button, { onClick: handleLoadMore })}
      <div className="absolute bottom-0 right-0 z-10">
        <Image
          src={image}
          alt={title}
          width={200}
          height={150}
          className="w-full h-auto"
        />
      </div>
    </section>
  )
}
