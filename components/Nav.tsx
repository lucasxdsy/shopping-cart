type PropsType = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>

 }

 const Nav = ({ viewCart, setViewCart }: PropsType) => {
  const content = (
    <nav className='nav relative'>
      <button onClick={() => setViewCart(!viewCart)}>
        {viewCart ? 'View Products' : 'View Cart'}
      </button>
      <div className="text-gray-950	p-1 text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500  rounded text-center fixed left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ marginTop: '7vh' }} >
        <span>
          {viewCart ? 'Products in the Cart' : 'Products to buy'}
        </span>
      </div>
    </nav>
  );

  return content;
};

export default Nav;












