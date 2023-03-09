import Nav from "./Navbar/Nav"
import Section1 from "./Main/Marquee"
import Section2 from "./Main/Regulatory"
import Services from "./Main/Services"
import Footer from "./Footer/Footer"


export default function App() {

  return (
    <div>
        <Nav />
        <Section1 />
        <Section2 />
        <Services />
        <Footer />
    </div>
  )
}