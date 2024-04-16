import { type ButtonHTMLAttributes } from 'react'

interface SecondaryButtonButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string
  btnClasses: string
  handleClick?: () => void
}

export default function SecondaryButton({
  handleClick,
  buttonText,
  btnClasses,
  ...rest
}: SecondaryButtonButtonProps) {
  const defaultClasses = `text-base font-normal tracking-wider border  block mx-auto  py-[16px] text-center    rounded-xl
   hover:scale-[1.01] hover:shadow-md transition-all duration-300
  active:scale-[0.96] active:duration-300 
  `

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (handleClick != null) {
      e.preventDefault()
      handleClick()
    }
  }

  return (
    <button
      className={`${btnClasses} ${defaultClasses}`}
      onClick={handleButtonClick}
      {...rest}
    >
      {buttonText}
    </button>
  )
}
