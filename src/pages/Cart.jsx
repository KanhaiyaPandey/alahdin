import shoe1 from "../assets/shoe1.jpg"

const Cart = () => {
  return (
    <div className="px-10 w-full flex h-96 gap-10 sm:flex-row flex-col">

        <div className="flex flex-col w-8/12  p-12 ">

            <div className=" flex justify-between items-center  p-2">
            <img className=" w-40 h-40 rounded-lg border border-gray-700 object-cover" src={shoe1} alt="" />
           <div className="flex flex-col  items-center">
            <h1 className="text-xl font-semibold">Sneaker</h1>
            <p>Nike</p>
            <span>yellow</span>
           </div>
           <div className="flex flex-col items-center">
            <h1 className=" font-semibold">Amount</h1>
             
           </div>
           <div className="flex flex-col items-center">
             <span className=" text-xl font-semibold">$ 50.00</span>
           </div>
         </div>
        </div>



        <div className="flex w-4/12 h-full bg-green-100"></div>
    </div>
  )
}

export default Cart