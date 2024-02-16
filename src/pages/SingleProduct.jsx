

const SingleProduct = () => {
  return (
    <div className="flex w-full sm:flex-row flex-col gap-3 p-10 ">

        <div className=" sm:w-1/2 w-full sm:h-[40rem] shadow-xl h-80 items-center">
            <img className="w-full rounded-xl h-full object-cover" 
            src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-blue-shirt-clothes-fashion-man-posing_158538-4913.jpg?size=626&ext=jpg&ga=GA1.1.1352202038.1706196203&semt=sph" alt="" />
        </div>

        <div className="flex flex-col gap-6 sm:w-1/2 w-full mt-5 px-5 items-center justify-center">
           <h1 className=" text-4xl font-semibold"> Roadster</h1>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
             nostrum magnam neque provident ab nesciunt deserunt dolore e</p>
             <span className="text-3xl">$ 40</span>
            <div className="flex gap-2">
             <button className="btn btn-outline btn-neutral">buy now</button>
             <button className="btn btn-outline btn-neutral">add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct