//Importa React e componente Link
import React from "react";
import Link from "./Link";

//Componente funcional
const Header = () => {
    //JSX
    return (
        <div className="ui secondary pointing menu">
            <Link href="/" className="item">Accordion</Link>
            <Link href="/search" className="item">Search</Link>
            <Link href="/dropdown" className="item">Dropdown</Link>
            <Link href="/translate" className="item">Translate</Link>
        </div>
    )
}
//Exporta componente
export default Header;