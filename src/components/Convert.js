import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Convert = ({text, language}) => {

const [translatedText, setTranslatedText] = useState("");
const [debouncedText, setDebouncedText] = useState("")

useEffect( () => {

    const timeout = setTimeout( () => {
        setDebouncedText(text)
    }, 750)

    return () => {
        clearTimeout(timeout)
    }

}, [text])


useEffect( () => {

    const translate = async () => {
        const translatedResponse = await Axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
            params: {
                q: text,                
                target: language.value,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            }
        })
        setTranslatedText(translatedResponse.data.data.translations[0].translatedText)
    }
    
    translate();

}, [debouncedText, language])

    return (
        <div>
            <h3>Output</h3>
            <p>{translatedText}</p>

        </div>
    )
}

export default Convert;