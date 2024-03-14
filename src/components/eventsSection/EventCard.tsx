/* eslint-disable @next/next/no-img-element */
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
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base not-italic text-black  hover:text-[#0F62FE] hover:underline line-clamp-2"
        >
          {`${address}, ${city}`}
        </a>
      )
    )
  }

  return (
    <li className="flex flex-col overflow-hidden border shadow-md cursor-pointer group rounded-xl font-roboto">
      <div className="relative w-full overflow-hidden min-h-[183px] transition-transform duration-200 ease-out border rounded-xl group-hover:scale-105">
        {/* <img
          src={event.image ?? ''}
          alt={event.title}
          className="object-cover w-full h-full"
        /> */}
      </div>
      <div className="flex-1 mx-5 my-3 ">
        <p className="text-xl font-medium text-[#21272A]"> {event.title}</p>
        <p className="mt-3 text-base  text-[#525252] ">
          {formattedDate && formattedTime && (
            <>
              {formattedDate} <span className="mx-2">•</span>
              <span>{formattedTime}</span>
            </>
          )}
        </p>
        {renderLocationLink()}
      </div>
      {event.entranceFee && (
        <p
          className={`flex items-center mx-5 mb-5 font-medium ${
            event.entranceFee.type === 'Free'
              ? 'text-[#057910]'
              : 'text-[#0F62FE]'
          }`}
        >
          {event.entranceFee.type === 'Free'
            ? 'Free'
            : `${event.entranceFee.priceSek} SEK`}
        </p>
      )}
    </li>
  )
}
