import Aanouncement from "../components/Aanouncement"
import Categories from "../components/Categories"
import Navbar from "../components/Navbar"
import PopulerProducts from "../components/PopulerProducts"
import Slider from "../components/Slider"
import Cart from "./Cart"
import SingleProduct from "./SingleProduct"


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
        <SingleProduct/>
        <Cart/>
    </div>
  )
}

export default HomePage