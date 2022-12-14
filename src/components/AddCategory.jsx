import React from 'react'
import { useState } from 'react';


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const submitForm = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <=1) return; 
        onNewCategory(inputValue)

        setInputValue('');

    }

  return (
    <form onSubmit = { submitForm  }>
        <input
            type="text"
            placeholder="Buscar gifs"
            value = {inputValue}
            onChange={onInputChange}

        />
    </form>
  )
}
