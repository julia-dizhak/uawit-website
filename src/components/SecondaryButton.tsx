import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ContentSectionButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  buttonLink?: string
  handleClick?: () => void
}

export default function ContentSectionButton({
  children,
  handleClick,
  buttonLink,
  ...rest
}: ContentSectionButtonProps) {
  const classes = `text-primaryBlue text-base font-normal  tracking-wider  block mx-auto mt-[64px]  px-[24px] py-[13px] text-center  border border-primaryBlue rounded-xl
   hover:scale-[1.01] hover:shadow-md transition-all duration-300
  active:scale-[0.96] active:duration-300
  `

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (handleClick != null) {
      e.preventDefault()
      handleClick()
    }

    if (buttonLink != null) {
      window.open(buttonLink, '_blank')
    }
  }

  return (
    <button className={classes} onClick={handleButtonClick} {...rest}>
      {children}
    </button>
  )
}
