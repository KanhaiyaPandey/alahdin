/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const CategoryItem = ({item}) => {
  return (
    <div className="card rounded-md relative overflow-hidden">
        <img className=" h-[40rem]" src={item.img} alt="" />

        <div className="card_body flex w-full h-full text-white items-center justify-center">
            <div className=" flex flex-col gap-14 items-center justify-center">
            <h1 className="text-3xl font-semibold">{item.title}</h1>
            <button className="btn btn-outline text-white btn-wide btn-neutral">View
           </button>
            </div>
        </div>
    </div>
  )
}

export default CategoryItem