import { ImageAsset } from '@sanity/types';

export interface EventsButtonType {
  buttonText: string;
  buttonLink: string;
}

export interface SectionType {
  _type: 'section';
  _id: string;
  sectionTitle: string;
  sectionDescription: string;
  eventsButton: EventsButtonType;
  backgroundImage: ImageAsset;
}
