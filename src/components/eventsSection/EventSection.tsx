'use client'
import { EventType, EventsListType } from '~/lib/sanity.queries/events/types'
import ContentSectionContainer from './ContentSectionContainer'
import EventCard from './EventCard'
import SecondaryButton from '../SecondaryButton'
import { EventsSectionType } from '~/lib/sanity.queries/eventsSection/types'
import { sortEventsByDate } from '~/utils/index'
import ActionContainer from './ActionContainer'
import decorativeImage from '~/assets/bg_image2.png'
import { ContactType } from '~/lib/sanity.queries/general/types'


interface EventsSectionProps {
  section: EventsSectionType
  events: EventsListType
  contacts: ContactType
}

export default function EventsSection({ section, events, contacts }: EventsSectionProps) {


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
    <div className="bg-backgroundColor">
      <ActionContainer section={section}  contacts={contacts}/>
      <ContentSectionContainer
        title={section?.sectionTitle}
        description={section?.sectionDescription}
        items={events}
        sortFunction={sortEventsByDate}
        button={buttonContent}
        currentDate={new Date()}
        image={decorativeImage}
      >
        {(event: EventType, isEventPassed: boolean) => (
          <EventCard
            event={event}
            key={event._id}
            isEventPassed={isEventPassed}
          />
        )}
      </ContentSectionContainer>
    </div>
  )
}
