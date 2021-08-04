import { useState } from 'react'

//custom hook
//1. create useForm
//2. add in all stateful logic into useForm
//3. return all needed items from useForm
//4. connect useForm to our signupForm component

const useForm = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const handleChanges = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    };
    const clearForm = e => {
        e.preventDefault();
        setValue(initialValue);
    };
    return [value, handleChanges, clearForm]
}

export default useForm