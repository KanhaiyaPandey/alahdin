




const Navbar = () => {
  return (
    <div className=" h-[60px]">
        <div className="py-[10px] px-[20px] flex justify-between gap-3 items-center">


            <div className=" flex-1 flex items-center">
                <span className=" text-lg cursor-pointer">EN</span>

                <div className=" border border-gray-300 items-center rounded-md flex ml-4 p-2 gap-3">
                    <input className="focus:outline-none focus:ring-0 px-2" type="text" />
                   <i className="fa-solid fa-magnifying-glass mr-2"></i>
                </div> 
            </div>


            <div className="flex-1 text-5xl font-semibold text-center">Alahdin</div>


            <div className=" flex-1 flex items-center justify-end gap-4 mr-6">

             <div className="flex items-center">     
             <a href="#" className="text-xl link link-hover">Register</a>
             <span className="text-xl m-1">/</span>
             <a href="#" className="text-xl link link-hover">Login</a>
            </div>

              <div className="indicator cursor-pointer">
              <i className="fa-solid fa-cart-shopping text-xl"></i>
              <span className="badge badge-xs badge-neutral indicator-item py-2">4</span>
             </div>

               
            </div>
        </div>
    </div>
  )
}

export default Navbar