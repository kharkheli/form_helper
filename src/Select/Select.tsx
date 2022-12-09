import { type } from "@testing-library/user-event/dist/type";
import React, {useState, useMemo} from "react";
import { Container, OptionsContainer, SingleOption } from "./style";
import {Props, Option} from "./types";


export default function Select({options}: Props) {
    const [focused, setFocused] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');

    const filteredOptions = useMemo(() => {
        return options.filter((option: Option) => option.label.toLowerCase().startsWith(inputValue.toLowerCase()));
    }, [options, inputValue]);

    return (<Container bg='#fff' className="hello" outline={true}>
        <input type="text" onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)} value={inputValue} onChange={(e)=>{
            if(e.target.value === '')
            setInputValue(e.target.value);
        }} />
        <OptionsContainer display={focused}>
            {filteredOptions.map((option: Option) => {
                return <SingleOption key={option.value}>{option.label}</SingleOption>
            })}

        </OptionsContainer>
    </Container>)
}