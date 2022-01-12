//Importa o React
import React from "react";

//Componente funcional recebe e desestrutura em variáveis
//as props e os elementos filhos
const Link = ({href, className, children}) => {
    
    //Callback function do método onClick da anchor tag
    const onClick = event => {
     
        //Condicional checando se o evento foi um clique
        //utilizando metaKey ou ctrl. Em caso positivo,
        //a função é encerrada imediatamente, e o comportamento padrão da aplicação é executado,
        //permitindo que o usuário a abra em nova guia
        if (event.metaKey || event.ctrlKey){
            return;
        }

        //Impede que a aplicação recarregue completamente, gerando requisições
        //desnecessárias a cada reload
        event.preventDefault();

        //Altera a URL de acordo com o href
        window.history.pushState({}, '', href)

        //Dispara evento de alteração de URL
        const navEvent = new PopStateEvent('popstate')
        window.dispatchEvent(navEvent)
    }
    
    //JSX
    return (
    <a 
    href={href}
    className={className}
    onClick={onClick}
    >{children}</a>
    )
}

//Exporta componente
export default Link;