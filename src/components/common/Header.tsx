import Container from './Container'
import { Logo } from '../Logo'
import { Button } from '../buttons/Button'

export default function Header({ logo, linkedIn }) {
  const { link, buttonText } = linkedIn

  return (
    <Container className="pt-3">
      <nav className="flex items-center justify-between mx-auto">
        <div className="flex items-center space-x-3 rtl:space-x-reverse pr-20">
          <Logo logo={logo} />
        </div>

        <div className="pl-3 md:flex items-center gap-4">
          <Button
            buttonText={buttonText}
            handleClick={() => {
              window.open(link as string, '_blank')
            }}
            className="m-0 bg-primaryBlue text-red my-3 hover:opacity-75 transition duration-300"
          />
        </div>
      </nav>
    </Container>
  )
}
