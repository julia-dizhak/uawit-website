import {
  type EventType,
  type EventsListType,
} from '~/lib/sanity.queries/events/types'
import ContentSectionContainer from './ContentSectionContainer'
import EventCard from './EventCard'

interface EventsSectionProps {
  events: EventsListType
}

export default function EventsSection({ events }: EventsSectionProps) {
  const sortEventsByDate = (a: EventType, b: EventType) => {
    const dateA = new Date(a.dateAndTime ?? '')
    const dateB = new Date(b.dateAndTime ?? '')
    return dateA.getTime() - dateB.getTime()
  }

  return (
    <ContentSectionContainer
      title="Events"
      description="Check out our upcoming events or events outside of our community that will help you find new information and expand your networking."
      items={events}
      sortFunction={sortEventsByDate}
      getDateProperty={(event) => event.dateAndTime}
    >
      {(event: EventType) => <EventCard event={event} key={event.title} />}
    </ContentSectionContainer>
  )
}
