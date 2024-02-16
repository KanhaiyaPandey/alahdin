import Aanouncement from "../components/Aanouncement"
import Categories from "../components/Categories"
import Navbar from "../components/Navbar"
import PopulerProducts from "../components/PopulerProducts"
import Slider from "../components/Slider"


const HomePage = () => {
  return (
    <div className=" relative flex flex-col">
      <div className="">
      <Aanouncement/>
        <Navbar/>
      </div>

        <Slider/>
        <Categories/>
        <PopulerProducts/>
    </div>
  )
}

export default HomePage