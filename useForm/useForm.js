import { useState } from 'react'

export const useForm = (initialState = {}) => {

    const [formValues, setFormValues] = useState(initialState);

    const handleFormReset = () =>{
        setFormValues(initialState);
    }

    const handleInputChange = ({ target }) => {
        
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    //return valores + funcion para modificarlos
    return [formValues, handleInputChange, handleFormReset];
}
