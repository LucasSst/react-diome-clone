import React from 'react'
import {ErroText, IconConteiner,InputContainer,InputText} from './styles'
import {   Controller } from "react-hook-form";
import { IInput } from './types';
const Input = ({leftIcon, name, control, errorMessage, ...rest}:IInput ) => {
  return (
    <>
      <InputContainer>
          {leftIcon ? (<IconConteiner>{leftIcon}</IconConteiner>) : null}
          
          <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field: {value, onChange} }) =>   <InputText value={value}
          onChange={onChange} {...rest} />}
          />
      </InputContainer>
      {errorMessage ? <ErroText>{errorMessage}</ErroText> : null}
    </>
  )
}
    

export {Input};
