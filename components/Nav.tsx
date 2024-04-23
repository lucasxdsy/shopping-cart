type PropsType = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>

 }

 const Nav = ({ viewCart, setViewCart }: PropsType) => {
  const content = (
<nav className='nav relative w-full'>
  <button onClick={() => setViewCart(!viewCart)}>
    {viewCart ? 'View Products' : 'View Cart'}
  </button>
  <div className="top-0 text-gray-950 right-[800px] text-xl font-bold bg-gradient-to to-purple-500 rounded absolute flex items-center" >
    <h1 className="whitespace-nowrap">
      {viewCart ? 'Products in the Cart' : 'Products to buy'}
    </h1>
  </div>
</nav>

  );

  return content;
};

export default Nav;












