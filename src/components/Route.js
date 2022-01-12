//Importando hooks. Não é essencial importar o React porque nenhum
//JSX é retornado
import { useEffect, useState } from "react";

//Componente de roteamento, que recebe a rota desejada e os elementos filhos do componente
const Route = ({path, children}) => {

    //Estado que monitora o caminho desejado e re-renderiza o componente
    //É definido por padrão o caminho atual
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    //useEffect executado uma única vez
    useEffect( () => {

        //Função a ser utilizada no EventListener, atualiza o estado de monitoramento do caminho
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname)
        }

        //Adiciona EventListener para monitorar evento gerado pelo componente Link
        window.addEventListener('popstate', onLocationChange);

        //Cleanup function removendo o EventListener caso este
        //componente deixe de ser exibido, para não quebrar a aplicação
        return () => {
            window.removeEventListener('popstate', onLocationChange)
        }
    }, [])    

    //Ternário que define se o componente será exibido ou não,
    //de acordo com o caminho definido no estado
    return currentPath === path ? children : null;
    
}

export default Route;