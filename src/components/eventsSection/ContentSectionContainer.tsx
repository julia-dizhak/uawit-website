import { ReactNode } from 'react'

interface ContentSectionContainerProps<T> {
  title: string
  description: string
  items: T[]
  children: (item: T) => ReactNode
  sortFunction?: (a: T, b: T) => number
  getDateProperty?: (item: T) => string | undefined
  button?: ReactNode
}

export default function ContentSectionContainer<T>({
  title,
  description,
  items,
  children,
  sortFunction,
  getDateProperty,
  button,
}: ContentSectionContainerProps<T>) {
  const currentDate = new Date()

  const filteredItems = items.filter((item) => {
    const eventDate = new Date(getDateProperty?.(item) ?? '')
    return eventDate >= currentDate
  })

  const sortedItems = sortFunction
    ? [...filteredItems].sort(sortFunction).slice(0, 3)
    : filteredItems.slice(0, 3)

  return (
    <section className="py-16 px-6 sm:px-[6.563rem]">
      <h2 className="font-bold text-center text-[42px] text-[#21272A] font-roboto">
        {title}
      </h2>
      <p className="text-center font-roboto color-[#21272A] mt-4 font-normal text-lg mb-[3.75rem]">
        {description}
      </p>

      <div className="grid grid-cols-1 gap-[3.75rem] md:grid-cols-2 lg:grid-cols-3">
        {sortedItems.flatMap((item, index) => (
          <div key={index}>{children(item)}</div>
        ))}
      </div>
      {button}
    </section>
  )
}
