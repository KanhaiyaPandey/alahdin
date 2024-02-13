import { categories } from "../utils/category";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
   <div className="flex flex-col gap-10 p-10 justify-between items-center" >
      <h1 className="text-4xl mt-40 mb-10 font-semibold">Shop by Category</h1>
    <div className="flex gap-5">
    {categories.map(item =>(
        <CategoryItem key={item.id} item = {item}/>
    ))}
    </div>

   </div>
  )
}

export default Categories