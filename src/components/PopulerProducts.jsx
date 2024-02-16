import Product from "./Product"
import { topProduct } from "../utils/category";


const PopulerProducts = () => {
  return (
    <div className="flex flex-col gap-10 p-10 justify-between items-center" >
    <h1 className="text-4xl mt-20 mb-10 font-semibold">Populer ones</h1>
  <div className="flex flex-wrap w-full items-center gap-4 justify-center">
  {topProduct.map(item =>(

      <Product key={item.id} item = {item}/>

  ))}
  </div>
 </div>
  )
}

export default PopulerProducts