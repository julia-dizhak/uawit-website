import { ReactNode } from 'react'

interface ContentSectionContainerProps<T> {
  title: string
  description: string
  items: T[]
  children: (item: T, isEventPassed: boolean) => ReactNode
  sortFunction?: (a: T, b: T) => number
  button?: ReactNode
  currentDate: Date
}

export default function ContentSectionContainer<T extends { dateAndTime: string }>({
  title,
  description,
  items,
  children,
  sortFunction,
  button,
  currentDate
}: ContentSectionContainerProps<T>) {

  const sortedItems = sortFunction
    ? [...items].sort(sortFunction).slice(0, 4)
    : items.slice(0, 4)

  return (
    <section className="py-16 px-6 sm:px-[6.563rem] font-manrope">
      <h2 className="font-medium text-center text-[48px] text-primaryBlack ">
        {title}
      </h2>
      <p className="text-center text-primaryGray mt-3 font-light text-base leading-[22px] mb-[56px]  max-w-[611px]  mx-auto">
        {description}
      </p>

      <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2 lg:grid-cols-3">
        {sortedItems.map((item, index) => (
          <div key={index}>{children(item, new Date(item.dateAndTime) < currentDate)}</div>
        ))}
      </div>
      {button}
    </section>
  )
}
