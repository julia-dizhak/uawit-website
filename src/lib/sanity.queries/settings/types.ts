export type LinkedInType = {
  link: string
  buttonText: string
}

export interface ContactsType {
  email: string
  phone?: string
  linkedIn: LinkedInType
}
