import React, { type ReactNode, type ButtonHTMLAttributes } from 'react'
import Link from 'next/link'

interface ContentSectionButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  redirectUrl?: string
  handleClick?: () => void
}

export default function ContentSectionButton({
  children,
  redirectUrl,
  handleClick,
  ...rest
}: ContentSectionButtonProps) {
  const classes = `text-[#0F62FE] text-sm font-roboto font-medium  tracking-wider  block mx-auto mt-20  px-[28px] py-[13px] text-center  border border-[#0F62FE] rounded-full
   hover:scale-[1.01] hover:shadow-md transition-all duration-300
  active:scale-[0.96] active:duration-300
 `

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (handleClick) {
      e.preventDefault()
      handleClick()
    }
  }

  if (redirectUrl) {
    return (
      <Link href={redirectUrl}>
        <a className={classes}>{children}</a>
      </Link>
    )
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
