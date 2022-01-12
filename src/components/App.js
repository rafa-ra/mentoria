import React, {useState} from "react";
import Route from "./Route";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown"
import Translate from "./Translate";
import Header from "./Header";

const accordionItems = [
    {
        title: "Title 1",
        content: "Hello I'm the first content"
    },
    {
        title: "Title 2",
        content: "You wanted a second content, here I am"
    },
    {
        title: "Title 3",
        content: "Last, but not least, hello there"
    }
];

const dropdownOptions = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A shade of blue',
        value: 'blue'
    }
]

const App = () => {
    
    const [selectedOption, setSelectedOption] = useState(dropdownOptions[0])

    return ( 
    <div>
        <Header />
        <Route path="/"><Accordion items={accordionItems}/></Route>        
        <Route path="/search"><Search/></Route>        
        <Route path="/dropdown">
            <Dropdown 
                options={dropdownOptions}
                label="Select a color"
                selectedOption={selectedOption}
                onSelectedOptionChange={setSelectedOption}
                />
        </Route>        
        <Route path="/translate"><Translate /></Route>
    </div>
    );
}

export default App;