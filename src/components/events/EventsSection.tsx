import { EventType, EventsListType } from '~/lib/sanity.queries/events/types'
import EventCard from './EventCard'
import SecondaryButton from '../buttons/SecondaryButton'
import { EventsSectionType } from '~/lib/sanity.queries/eventsSection/types'
import { sortByDate } from '~/utils/index'
import decorativeImage from '~/assets/images/bg_image2.png'
import Image from 'next/image'
import Container from '../common/Container'
import { PortableText } from '@portabletext/react'
import { useState } from 'react'

interface EventsSectionProps {
  section: EventsSectionType
  events: EventsListType
}

const DISPLAY_EVENTS_COUNT = 3

export default function EventsSection({ section, events }: EventsSectionProps) {
  const { eventsTitle, eventsDescription, moreButtonText } = section

  const [displayCount, setDisplayCount] = useState(DISPLAY_EVENTS_COUNT)

  const handleLoadMore = () => {
    setDisplayCount((prevCount) => prevCount + DISPLAY_EVENTS_COUNT)
  }
  const showLoadMoreButton = events.length > displayCount

  const sortedEvents = [...events].sort(sortByDate).slice(0, displayCount)

  return (
    <div className="bg-backgroundColorGray relative pb-[100px]" id="events">
      <Container className="pt-[100px]">
        {eventsTitle && (
          <h2 className="font-medium text-center text-[48px] text-primaryBlack ">
            {eventsTitle}
          </h2>
        )}

        {eventsDescription && (
          <div className="text-primaryGray mt-4 max-w-5xl m-auto text-center mb-10">
            {eventsDescription && <PortableText value={eventsDescription} />}
          </div>
        )}

        <div>
          <ul className="grid grid-cols-1 gap-[24px] md:grid-cols-2 lg:grid-cols-3 mb-20">
            {sortedEvents.map((event: EventType) => (
              <EventCard
                key={event._id}
                event={event}
                isEventPassed={new Date(event.dateAndTime) < new Date()}
              />
            ))}
          </ul>
          {showLoadMoreButton && (
            <SecondaryButton
              buttonText={moreButtonText}
              btnClasses="text-primaryBlue border-primaryBlue px-4 py-2"
              handleClick={handleLoadMore}
            />
          )}
        </div>
      </Container>

      <div className="absolute bottom-0 right-0 z-1 lg:visible">
        <div className="w-[200]px h-[90px]">
          <Image
            src={decorativeImage}
            alt="bottom decorative image"
            width={200}
            height={90}
          />
        </div>
      </div>
    </div>
  )
}
