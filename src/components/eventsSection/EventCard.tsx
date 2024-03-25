import Image from 'next/image'
import Link from 'next/link'
import { EventType } from '~/lib/sanity.queries/events/types'
import { formatDateTime } from '~/lib/sanity.queries/events/utility'

interface EventCardProps {
  event: EventType
}

export default function EventCard({ event }: EventCardProps) {
  const { formattedDate, formattedTime } = formatDateTime(event.dateAndTime)

  const renderLocationLink = () => {
    const { address, city, googleMapsUrl } = event.location ?? {}
    return (
      address &&
      city &&
      googleMapsUrl && (
        <Link
          href={googleMapsUrl}
          rel="noopener noreferrer"
          className="text-base not-italic text-secondaryGray hover:text-primaryBlue hover:underline line-clamp-2 mt-1.5"
        >
          {`${address}, ${city}`}
        </Link>
      )
    )
  }

  const imageUrl = typeof event.image === 'string' ? event.image : ''

  return (
    <li className="flex flex-col overflow-hidden cursor-pointer group ">
      <div className="relative w-full overflow-hidden min-h-[183px]  border rounded-xl ">
        {event.image && (
          <Image
            src={imageUrl}
            alt={event.title}
            fill
            className="object-cover w-full h-full transition-transform duration-200 ease-out group-hover:scale-105"
          />
        )}
      </div>
      <div className="flex-1 mt-6 ">
        <p className="text-xl font-medium text-"> {event.title}</p>
        <p className="mt-3 text-base text-secondaryGray">
          {formattedDate && formattedTime && (
            <>
              {formattedDate} <span className="mx-2 text-[#484848]">•</span>
              <span>{formattedTime}</span>
            </>
          )}
        </p>
        {renderLocationLink()}
      </div>
    </li>
  )
}
