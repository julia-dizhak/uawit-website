'use client'
import { EventType, EventsListType } from '~/lib/sanity.queries/events/types'
import ContentSectionContainer from './ContentSectionContainer'
import EventCard from './EventCard'
import SecondaryButton from '../SecondaryButton'
import { EventsSectionType } from '~/lib/sanity.queries/eventsSection/types'
import { sortEventsByDate } from '~/utils/index'
import decorativeImage from '~/assets/images/bg_image2.png'
import Image from 'next/image'

interface EventsSectionProps {
  section: EventsSectionType
  events: EventsListType
}

export default function EventsSection({ section, events }: EventsSectionProps) {
  const buttonContent = (
    <SecondaryButton
      buttonText={section?.eventsButton?.buttonText}
      btnClasses={`text-primaryBlue  border-primaryBlue mt-[64px] px-[24px]`}
    />
  )
  if (events.length === 0) {
    return null
  }

  return (
    <div className="bg-backgroundColorGray relative">
      <ContentSectionContainer
        title={section?.sectionTitle}
        description={section?.sectionDescription}
        items={events}
        sortFunction={sortEventsByDate}
        button={buttonContent}
        currentDate={new Date()}
      >
        {(event: EventType, isEventPassed: boolean) => (
          <EventCard
            event={event}
            key={event._id}
            isEventPassed={isEventPassed}
          />
        )}
      </ContentSectionContainer>
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
