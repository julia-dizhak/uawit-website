import Image from 'next/image'
import { urlForImage } from '~/lib/sanity.image'
import { WidgetType } from '~/lib/sanity.queries/widgets/types'
import Container from './common/Container'
import { Logo } from './Logo'
import React from 'react'

type Props = {
  widget: WidgetType
}

export const Widget = ({ widget }: Props) => {
  const {
    title,
    description,
    componentType,
    logo,
    Picture
  } = widget;

  console.log(widget);

  if (widget.componentType === 'Image') {
    // @ts-ignore
    return (
      <Container className="text-center">
        <div>Widget should be here</div>
        <div>
          {widget.Picture && (
            <Image
              src={urlForImage(widget.Picture?.image).url()}
              objectFit="cover"
              width="300"
              height="300"
              alt={widget.Picture.title}
            />
          )}
        </div>

      </Container>
    )
  } else if (widget.componentType === 'Logo') {
    // @ts-ignore
    return (
      <Logo logo={widget.logo} />
    )
  }
}
