import img1 from "../assets/jeans.jpg"
import img2 from "../assets/summer.jpg"
import img3 from "../assets/shirts.jpg"

const Slider = () => {
  return (
<div className="carousel h-[38rem] mt-10">

  <div className="carousel-item overflow-hidden relative">
    <img src={img1} className="" alt="Burger" />

    <div className="card_body flex w-full h-full text-white items-center">
      <div className=" m-10 flex flex-col gap-7">
      <h1 className=" text-5xl font-bold">Get exciting deals on our latest jeans collection</h1>
      <button className="btn btn-outline text-white btn-wide btn-neutral">Shop Now
      </button>
      </div>
    </div>
  </div> 

  <div className="carousel-item overflow-hidden relative">
    <img src={img2} alt="Burger" />
    <div className="card_body flex w-full h-full text-white items-center">
      <div className=" m-10 flex flex-col gap-7">
      <h1 className=" text-5xl font-bold">Get exciting deals on our summer collection</h1>
      <button className="btn btn-outline text-white btn-wide btn-neutral">Shop Now
      </button>
      </div>
    </div>
  </div> 

  <div className="carousel-item overflow-hidden relative">
    <img src={img3} alt="Burger" />
    <div className="card_body flex w-full h-full text-white items-center">
      <div className=" m-10 flex flex-col gap-7">
      <h1 className=" text-5xl font-bold">Get exciting deals on our latest winnter collection</h1>
      <button className="btn btn-outline text-white btn-wide btn-neutral">Shop Now
      </button>
      </div>
    </div>
  </div> 
</div>
  )
}

export default Slider