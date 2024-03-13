import Nav from "./Nav";


type PropsType = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
 
 }

const Header = ({viewCart, setViewCart} : PropsType) => {

 const content = (
  <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 p-5 grid grid-cols-3 gap-1">
    <div className="text-white items-center col-span-2 flex space-x-10">
      <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-sky-900 p-2 rounded">
        <div>Shopping-Cart</div>
      </div>
      <div className="flex flex-col text-sm space-y-2">
        <div>
          <span className="font-bold text-lg">Total items:</span> <span>X</span>
        </div>
        <div>
          <span className="font-bold text-lg">Total Price:</span> <span>$X.XX</span>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-end" >

    <div className="text-white text-xl font-bold bg-gradient-to-r from-indigo-600 to-sky-900 p-2 rounded">
      <Nav viewCart={viewCart} setViewCart={setViewCart}></Nav>
    </div>



    </div>

  </header>
);
   
    return (
        content
    )
}

export default Header




