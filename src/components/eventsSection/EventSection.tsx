import { EventType, EventsListType } from '~/lib/sanity.queries/events/types'
import ContentSectionContainer from './ContentSectionContainer'
import EventCard from './EventCard'
import SecondaryButton from '../SecondaryButton'

interface EventsSectionProps {
  events: EventsListType
}

export default function EventsSection({ events }: EventsSectionProps) {
  const sortEventsByDate = (a: EventType, b: EventType) => {
    const dateA = new Date(a.dateAndTime ?? '')
    const dateB = new Date(b.dateAndTime ?? '')

    if (isNaN(dateA.getTime())) return -1
    if (isNaN(dateB.getTime())) return 1

    return dateA.getTime() - dateB.getTime()
  }

  const buttonContent = (
    <SecondaryButton buttonLink={events[0]?.eventsButton?.buttonLink}>
      {events[0]?.eventsButton?.buttonText}
    </SecondaryButton>
  )

  if (events.length === 0) {
    return null
  }

  return (
    <ContentSectionContainer
      title={events[0]?.sectionTitle}
      description={events[0]?.sectionDescription}
      items={events}
      sortFunction={sortEventsByDate}
      getDateProperty={(event) => event.dateAndTime}
      button={buttonContent}
    >
      {(event: EventType) => <EventCard event={event} key={event._id} />}
    </ContentSectionContainer>
  )
}