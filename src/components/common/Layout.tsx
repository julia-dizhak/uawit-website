import { Contact } from '../Contact'
import { Footer } from '../Footer'
import Header from './Header'

export default function Layout({ logo, contacts, children }) {
  const { email, linkedIn } = contacts

  return (
    <div>
      <Header logo={logo} linkedIn={linkedIn} />
      <main>{children}</main>
      {Boolean(email) && <Contact email={email} />}
      <Footer logo={logo} contacts={contacts} showNavigation={false} />
    </div>
  )
}
