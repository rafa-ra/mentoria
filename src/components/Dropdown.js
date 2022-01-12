//Importando o React e os hooks para a aplicação
import React, {useState, useRef, useEffect} from "react";

//Componente funcional, recebendo como parâmetros as props de itens, label e estado
const Dropdown = ({options, label, selectedOption, onSelectedOptionChange}) => {
    
    //useState para definir se o componente estará aberto ou fechado
    const [open, setOpen] = useState(false);

    //useRef a ser utilizado para analisar se o clique que dispara um eventListener será dentro ou fora do componente
    const ref = useRef();

    //Hook usado para adicionar e remover eventListener de clique no body
    useEffect( () => {
        
        //Callback do eventListener que recebe as informações do evento
        const onBodyClick = event => {
            
            //Analisa se o item que foi clicado está contido no componente, se sim, encerra a função sem executar nada
            if (ref.current.contains(event.target)){
                return;
            }

            //Se não, altera o estado do componente, o fechando
            setOpen(false);
        }
        
        //eventListener no body
        document.body.addEventListener('click', onBodyClick, {capture: true})
        
        //Esse return é a cleanup function, que é executada sempre que o componente é re-rendererizado (a partir da segunda vez)
        //ou quando o componente deixa de ser renderizado. Neste projeto, é necessário por que haverá um navigation e caso o eventListener
        //não fosse removido, a aplicação tentaria criar um ref para um componente inexistente, o que geraria um erro e a quebraria  
        return () => {
            document.body.removeEventListener('click', onBodyClick, {capture: true})
        }

    //Os colchetes indicam que o useEffect deve ser executado na primeira renderização e em todas as posteriores
    }, [])
    
    //É feito um map para renderizar as opções que foram recebidas como props e o array é atribuído à variável renderedOptions
    const renderedOptions = options.map( option => {
        
        //Esse if impede que a opção atualmente selecionada seja exibida no dropdown
        if (option.value === selectedOption.value){
            return null;
        }

        //JSX das opções
        return (
            <div key={option.value} className="item" onClick={ () => onSelectedOptionChange(option)}>              
                {option.label}
            </div>
        )
    })

    //JSX do componente
    return (
        <div 
            className="ui form"
            //Cliques dentro do componente alternam o estado do componente entre aberto e fechado
            onClick={ () => setOpen(!open)}
            //ref na camada superior do componente, utilizado no useEffect para indicar se os cliques aconteceram dentro ou fora do componente
            ref={ref}  
        >
            <div className="field">
                
                {/*Label recebido via props para permitir reutilização do componente para outros fins */}
                <label className="label">{label}</label>
                {/*Ternário que alterna as classNames que definem se o componente fica aberto ou não */}
                <div className={`ui selection dropdown ${ open ? "visible active" : "" }`}>
                    <div className="text">{selectedOption.label}</div>
                    <i className="dropdown icon"></i>
                    {/*Ternário que alterna as classNames que definem se o componente fica aberto ou não.
                    Dentro da div é exibido o array das opções */}
                    <div className={`menu ${ open ? "visible transition" : "" }`}>{renderedOptions}</div>                
                </div>
            </div>
        </div>
    )   
}

//Exportação geral do componente
export default Dropdown;