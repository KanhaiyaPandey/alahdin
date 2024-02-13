import Aanouncement from "../components/Aanouncement"
import Categories from "../components/Categories"
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"


const HomePage = () => {
  return (
    <div>
        <Aanouncement/>
        <Navbar/>
        <Slider/>
        <Categories/>
    </div>
  )
}

export default HomePage