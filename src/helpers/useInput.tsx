
import { useState, ChangeEvent } from "react";

type InputValue = string;

type InputHandler = (event: ChangeEvent<HTMLInputElement>) => void;

type UseInputProps = {
    initialValue?: InputValue;
};

type UseInputReturn = {
    value: InputValue;
    setValue: (value: InputValue) => void;
    handleChange: InputHandler;
    error: string | null;
    handleError: (error : string | null) => void;
    hasError : boolean;

};

const useInput = ({ initialValue = "" }: UseInputProps = {}): UseInputReturn => {

    const [value, setValue] = useState<InputValue>(initialValue);
    const [error, setError] = useState<string | null>(null);
    const hasError : boolean = error !== null;

    const handleChange: InputHandler = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
    };

    const handleError = (error : string | null) => {
        setError(error);
    };

    return {
        value,
        setValue,
        handleChange,
        error,
        handleError,
        hasError
    };
};

export default useInput;
