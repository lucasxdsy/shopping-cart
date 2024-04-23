type PropsType = {
    viewCart:boolean
}

const Footer = ({viewCart}:PropsType) => {
  
    const year : number = new Date().getFullYear()
    
    const content = (
<footer className="min-h-fit mt-10 bottom-0 justify-between w-full">
  {(!viewCart)&& (
    <div className="inset-x-0 bottom-12 p-6 flex flex-col items-center justify-center ">
      <div className="flex">

      </div>
    </div>
  )}
  <div className="inset-x-0 bottom-0  p-6 flex items-center justify-center text-lg "> 
    Shopping-cart &copy; {year}
  </div>
</footer>
    ); 
   
  
  return (
     content 
  )
}

export default Footer 