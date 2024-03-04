import { type EventsListType } from '~/lib/sanity.queries/events/types'
import ContentSectionContainer from './ContentSectionContainer'
import EventCard from './EventCard'

interface EventsSectionProps {
  events: EventsListType[]
}

export default function EventsSection({ events }: EventsSectionProps) {
  console.log('events n component', events, typeof events)

  return (
    <ContentSectionContainer
      title="Events"
      description="Check out our upcoming events or events outside of our community that will help you find new information and expand your networking."
      items={events}
      children={(event: EventsListType) => (
        <EventCard event={event} key={event.title} />
      )}
    />
  )
}
