import { Button } from './Button'

export const Contact = ({ contacts }) => {
  const { email } = contacts
  const handleButtonClick = () => {
    console.log('###email', email)
    window.location.assign(`mailto:${email}`)
  }
  return (
    <div className="bg-white rounded-[28px] pt-28 pb-12">
      <div className="w-full">
        <h3 className="w-full md:w-2/5 mb-3 text-5xl leading-none tracking-tight text-gray-900 font-light block ml-auto mr-auto text-center">
          Do you have some interesting ideas or proposals?
        </h3>
        <p className="text-center pb-9 text-gray-400 text-lg font-light">
          Contact us and share your thoughts with our community!
        </p>
      </div>
      <Button
        buttonText="Contact us"
        handleClick={handleButtonClick}
        className="m-0 bg-primaryBlue text-red my-3  hover:opacity-75 transition duration-300 text-center block mx-auto"
      />
    </div>
  )
}
