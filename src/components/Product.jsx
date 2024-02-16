/* eslint-disable react/prop-types */


const Product = ({item}) => {
  return (
  <div className="card w-[20rem] rounded-lg h-[24rem] mb-4 bg-base-100 overflow-hidden">
    <img src={item.img} className="object-cover rounded-lg h-full w-full" alt="Shoes" />
    <div className="card_body w-full h-full flex items-center gap-8 justify-center">
      <button className=" text-white text-2xl transition hover:-translate-y-5 hover:text-5xl "><i className="fa-solid fa-cart-shopping"></i></button>
      <button className=" text-white text-2xl transition hover:-translate-y-5 hover:text-5xl"><i className="fa-regular fa-eye"></i></button>
      <button className=" text-white text-2xl transition hover:-translate-y-5 hover:text-5xl"><i className="fa-solid fa-share"></i></button>
    </div>
</div>
  )
}

export default Product