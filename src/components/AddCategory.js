import React, {useState} from 'react'

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Hola Mundo')
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <>
         <input
            type="text"
            value={inputValue}
            onChange={ handleInputChange }
          />
        </>
    )
}
