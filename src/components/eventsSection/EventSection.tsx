'use client'
import { EventType, EventsListType } from '~/lib/sanity.queries/events/types'
import ContentSectionContainer from './ContentSectionContainer'
import EventCard from './EventCard'
import SecondaryButton from '../SecondaryButton'
import { EventsSectionType } from '~/lib/sanity.queries/eventsSection/types'
import {sortEventsByDate} from '~/utils/index'
import ActionContainer from './ActionContainer'

interface EventsSectionProps {
  section: EventsSectionType
  events: EventsListType
}

export default function EventsSection({section, events }: EventsSectionProps) {

  const buttonContent = (
    <SecondaryButton buttonText={section?.eventsButton?.buttonText} btnClasses={`text-primaryBlue  border-primaryBlue mt-[64px] px-[24px]`}
    /> 
  )
  if (events.length === 0) {
    return null
  }

 const decorativeImageUrl = typeof section.decorativeImageElement === 'string' ? section.decorativeImageElement : ''


  return (
    <div className="bg-backgroundColor">
    <ActionContainer section={section} />
    <ContentSectionContainer
      title={section?.sectionTitle}
      description={section?.sectionDescription}
      items={events}
      sortFunction={sortEventsByDate}
      button={buttonContent}
      currentDate={new Date()}
      image={decorativeImageUrl}
  
    >
      {(event: EventType, isEventPassed: boolean) => <EventCard event={event} key={event._id} isEventPassed={isEventPassed} />}
    </ContentSectionContainer>
    </div>
  )
}

