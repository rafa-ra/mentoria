//Importando React, hook e componentes

import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

//Array de linguagens a serem passadas ao dropdown
const languages = [
    {
    label:'Português',
    value: 'pt'
    },
    {
        label:'Espanõl',
        value: 'es'
    },
    {
        label: 'English',
        value: 'en'
    },
]


const Translate = () => {

    //Estados para controlar a linguagem definida e o texto a ser traduzido
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
    const [text, setText] = useState("");

    
    //JSX
    return (
    // Input de texto com método onChange
    //Dropdown passando a linguagem definida para tradução do texto
    //Componente de conversão do texto para o idioma definido
    <div className="ui form">
        <label className="label" style={{ fontWeight: "bold"}}>Translate</label>
        <input
        style={{ marginTop: "5px"}}
        type="text"
        placeholder="Enter text..."
        className="field"
        value={text}
        onChange={ e => {
            setText(e.target.value)
        }}
        ></input>        
        <Dropdown
            options={languages}
            label="Select Language"
            selectedOption={selectedLanguage}
            onSelectedOptionChange={setSelectedLanguage}
        />
        <hr />
        <Convert language={selectedLanguage} text={text}/>
    </div>
    )
}

//Exportando o componente
export default Translate;