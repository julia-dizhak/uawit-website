import {
  type EventType,
  type EventsListType,
} from '~/lib/sanity.queries/events/types'
import ContentSectionContainer from './ContentSectionContainer'
import EventCard from './EventCard'
import ContentSectionButton from './ContentSectionButton'

interface EventsSectionProps {
  events: EventsListType
}

export default function EventsSection({ events }: EventsSectionProps) {
  const sortEventsByDate = (a: EventType, b: EventType) => {
    const dateA = new Date(a.eventCard.dateAndTime ?? '')
    const dateB = new Date(b.eventCard.dateAndTime ?? '')

    if (isNaN(dateA.getTime())) return -1
    if (isNaN(dateB.getTime())) return 1

    return dateA.getTime() - dateB.getTime()
  }

  const buttonContent = (
    <ContentSectionButton
      buttonLink={events[0]?.eventSectionButton?.buttonLink}
    >
      See more events
    </ContentSectionButton>
  )

  if (events.length === 0) {
    return null
  }

  return (
    <ContentSectionContainer
      title="Events"
      description="Check out our upcoming events or events outside of our community that will help you find new information and expand your networking."
      items={events}
      sortFunction={sortEventsByDate}
      getDateProperty={(event) => event.eventCard.dateAndTime}
      button={buttonContent}
    >
      {(event: EventType) => (
        <EventCard event={event.eventCard} key={event._id} />
      )}
    </ContentSectionContainer>
  )
}
