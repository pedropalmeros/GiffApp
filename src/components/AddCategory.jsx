import React from 'react'
import { useState } from 'react';


export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const submitForm = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <=1) return; 

        setCategories(categories=> [inputValue, ...categories]);
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
