//Importando o React e o hook useState
import React, { useState } from "react";

//Declarando o componente funcional que recebe a prop items e a desestrutura em uma variável
const Accordion = ({ items }) => {
    
    //Inicia o estado que será utilizado para identificar o item ativo do Accordion. O default é null
    //porque essa será uma variável numérica
    const [activeIndex, setActiveIndex] = useState(null)

    //Map que itera em todos os elementos do array items e gera os JSX.
    //Declara o segundo argumento index para utilização posterior
    const renderedItems = items.map( (item, index) => {

        //Analisa se o índice atual está ativo e retorna falso ou verdadeiro
        const currentIndexActive = index === activeIndex;

        //Variável a ser utilizada nos classNames para alternar visibilidade dos elementos do Accordion
        const active = currentIndexActive ? "active" : "";

        //JSX de cada elemento do map
        return (
            
            <div key={item.title}>
                {//Template literal que alterna a visibilidade em função da variável 'active'.
                //O projeto original não contemplava o toggle na visibilidade, apenas permitia 'ativar', foi inserido o ternário.
                //O método onClick altera o estado da aplicação para o index atual ou null, dependendo se
                //atualmente o elemento está ativo ou não, e re-renderiza
                }
                <div
                    className={`${active} title`}
                    onClick={ () => {!currentIndexActive ? setActiveIndex(index) : setActiveIndex(null)}}
                >
                    <i className="dropdown icon"></i>  
                    {item.title}
                </div>
                <div className={`${active} content`}>{item.content}</div>
            </div>
        )
   })

    //JSX do componente
    return (
        <div className="ui styled accordion">{renderedItems}</div>
    )
}

export default Accordion;