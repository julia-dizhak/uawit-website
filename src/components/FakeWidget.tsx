import Image from 'next/image'
import fakeImage from '~/assets/images/fake-widget.jpg'

// TODO: temporary solution, need to be replaced by real widget, can not edit from sanity
const FakeWidget = () => {
  return (
    <div className="relative w-full">
      <div className="lg:h-[600px] sm:h-[300px] overflow-hidden">
        <Image
          className="object-cover"
          src={fakeImage}
          alt="ua women in it"
          fill
        />
      </div>
    </div>
  )
}

export default FakeWidget
