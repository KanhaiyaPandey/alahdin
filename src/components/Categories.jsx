import { categories } from "../utils/category";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
   <div className="flex flex-col gap-10 p-10 justify-between items-center mt-36" >
      <h1 className="text-4xl  mb-10 font-semibold">Shop by Category</h1>
    <div className="flex flex-col sm:flex-row gap-5">
    {categories.map(item =>(
        <CategoryItem key={item.id} item = {item}/>
    ))}
    </div>
   </div>
  )
}

export default Categories