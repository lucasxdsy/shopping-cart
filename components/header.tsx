import Nav from "./Nav";

type PropsType = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>,
    toggleSidebar: () => void // Adicionando toggleSidebar como prop
}

const Header = ({viewCart, setViewCart, toggleSidebar}: PropsType) => {

    const handleHomeClick = () => {
        window.location.reload(); // Recarrega a página
      };

    const content = (
        <header className="sticky top-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 p-5 grid grid-cols-3 gap-1 h-28">
            <div className="text-white items-center col-span-2 flex space-x-10">
                <div className="flex items-center space-x-2 cursor-pointer" onClick={toggleSidebar}> {/* Adicionando toggleSidebar ao clicar no ícone */}
                    <div className="cursor-pointer p-4 text-xl md:text-2xl lg:text-3xl">&#9776;</div> {/* Ícone dos três traços */}
                </div>

                <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-sky-900 p-2 rounded"> {/* Mantendo o título do Shopping Cart */}
                    <button onClick={handleHomeClick} >Apontamentos</button> {/* Use um botão */}
                </div>

                <div className="flex flex-col text-sm space-y-2">

                </div>
            </div>
            <div className="flex items-center justify-end">
                <div className="text-white text-xl font-bold bg-gradient-to-r from-indigo-600 to-sky-900 p-2 rounded">
                    <Nav viewCart={viewCart} setViewCart={setViewCart}></Nav>
                </div>
            </div>
        </header>
    );

    return (
        <div className="mb-8">
            {content}
        </div>
    )
}

export default Header
