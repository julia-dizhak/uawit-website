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
  button,
}: ContentSectionContainerProps<T>) {
  const currentDate = new Date()


  const sortedItems = sortFunction
    ? [...items].sort(sortFunction).slice(0, 3)
    : items.slice(0, 3)

  return (
    <section className="py-16 px-6 sm:px-[6.563rem] font-manrope">
      <h2 className="font-medium text-center text-[48px] text-primaryBlack ">
        {title}
      </h2>
      <p className="text-center text-primaryGray mt-3 font-light text-base leading-[22px] mb-[56px]  max-w-[611px]  mx-auto">
        {description}
      </p>
  

      <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2 lg:grid-cols-3">
        {sortedItems.flatMap((item, index) => (
          <div key={index}>{children(item)}</div>
        ))}
      </div>
      {button}
    </section>
  )
}
