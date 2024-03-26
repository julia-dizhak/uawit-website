import { EventType, EventsListType } from '~/lib/sanity.queries/events/types'
import ContentSectionContainer from './ContentSectionContainer'
import EventCard from './EventCard'
import SecondaryButton from '../SecondaryButton'
import { EventsSectionType } from '~/lib/sanity.queries/eventsSection/types'
import {sortEventsByDate} from '~/utils/index'

interface EventsSectionProps {
  section: EventsSectionType
  events: EventsListType
}

export default function EventsSection({section, events }: EventsSectionProps) {

  const buttonContent = (
    <SecondaryButton buttonLink={section?.eventsButton?.buttonLink}> 
      {section?.eventsButton?.buttonText}
    </SecondaryButton>
  )

  if (events.length === 0) {
    return null
  }

  return (
    <ContentSectionContainer
      title={section?.sectionTitle}
      description={section?.sectionDescription}
      items={events}
      sortFunction={sortEventsByDate}
      button={buttonContent}
      currentDate={new Date()}
    >
      {(event: EventType, isEventPassed: boolean) => <EventCard event={event} key={event._id} isEventPassed={isEventPassed} />}
    </ContentSectionContainer>
  )
}
