import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import WhatsAppButton from './WhatsAppButton.jsx'
import useReveal from './useReveal.js'

export default function Layout({ children }) {
  // useReveal internally watches pathname changes via useLocation,
  // so no extra pathname useEffect is needed here.
  useReveal()

  return (
    <>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
