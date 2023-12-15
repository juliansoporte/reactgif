import { useState } from "react"

export const AddCategories = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')
    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = (e) => {
        e.preventDefault();        
        //console.log(inputValue)
        if (inputValue.trim().length <= 1) {
            return;            
        }
        setInputValue('');
        onNewCategory(inputValue.trim());
        //setCategories( categories => [inputValue, ...categories]);

    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input 
                type="text" 
                placeholder="Buscar..."
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}