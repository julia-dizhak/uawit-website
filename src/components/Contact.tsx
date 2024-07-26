import { Button } from './buttons/Button'
import Container from './common/Container'

export const Contact = ({ email }) => {
  const handleButtonClick = () => {
    window.location.assign(`mailto:${email}`)
  }
  return (
    <div className="bg-white py-20">
      <Container>
        <div>
          <h3 className="w-full md:w-3/5 mb-3 text-xl md:text-5xl leading-12 tracking-tight text-gray-900 font-light block ml-auto mr-auto text-center">
            Do you have some interesting ideas or proposals?
          </h3>
          <p className="text-center pt-4 pb-9 text-gray-400 text-lg font-light">
            Contact us and share your thoughts with our community!
          </p>
        </div>
        <Button
          buttonText="Contact us"
          handleClick={handleButtonClick}
          className="bg-primaryBlue my-3 block mx-auto"
        />
      </Container>
    </div>
  )
}
