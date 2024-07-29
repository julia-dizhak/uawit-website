import Image from 'next/image'
import Link from 'next/link'
import { EventType } from '~/lib/sanity.queries/events/types'
import formatDateTime from '~/utils/index'

interface EventCardProps {
  event: EventType
  isEventPassed: boolean
}

export default function EventCard({ event, isEventPassed }: EventCardProps) {
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
          passHref
          className="text-base not-italic text-secondaryGray hover:text-primaryBlue hover:underline line-clamp-2 mt-1.5"
        >
          {`${address}, ${city}`}
        </Link>
      )
    )
  }

  const imageUrl = typeof event.image === 'string' ? event.image : ''

  return (
    <li className="flex flex-col overflow-hidden cursor-pointer group">
      <div
        className={`relative w-full overflow-hidden h-[220px] border rounded-xl ${
          isEventPassed ? 'opacity-60  saturate-[.35]' : ''
        }`}
      >
        {event.image && (
          <Image
            className="object-cover w-full h-auto transition-transform duration-200 ease-out group-hover:scale-105"
            src={imageUrl}
            alt={event.title}
            fill
            sizes="(min-width: 1040px) calc(33.32vw - 87px), (min-width: 780px) calc(50vw - 119px), (min-width: 640px) calc(100vw - 212px), calc(100vw - 50px)"
          />
        )}
      </div>
      <div className="flex-1 mt-6 ">
        <p className="text-xl font-medium"> {event.title}</p>
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
