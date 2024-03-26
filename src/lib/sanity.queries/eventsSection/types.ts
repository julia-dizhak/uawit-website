import { ImageAsset } from '@sanity/types';

export interface EventsButtonType {
  buttonText: string;
  buttonLink: string;
}

export interface EventsSectionType {
  _type: 'eventsSection';
  _id: string;
  sectionTitle: string;
  sectionDescription: string;
  eventsButton: EventsButtonType;
  backgroundImage: ImageAsset;
}
