type PropsType = {
    viewCart:boolean
}

const footer = ({viewCart}:PropsType) => {
  
    const year : number = new Date().getFullYear()
    
    const content = (
        <footer className="min-h-screen flex flex-col justify-between ">
            {viewCart ? (
                <div className="absolute inset-x-0 bottom-0  p-6 flex items-center justify-center text-lg "> 
                Shopping-cart &copy; {year}</div>
            ) : (
                <div className="absolute inset-x-0 bottom-0  p-6 flex flex-col items-center justify-center ">
                  <div className="flex">
                    <span className="text-2xl font-bold"> Total Items: &nbsp;</span> 
                     <span className="text-2xl "> XXX </span>
                    <span className="text-2xl font-bold ">&emsp;&emsp;Total Price:</span>  
                     <span className="text-2xl "> &nbsp;$XXX.X </span>
                 </div>
                   <span className="text-lg ">Shopping-cart &copy; {year}   </span>
                </div>
            )}
        </footer>
    ); 
   
  
  return (
     content 
  )
}

export default footer 