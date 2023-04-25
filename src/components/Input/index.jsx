import React from 'react'
import {ErroText, IconConteiner,InputContainer,InputText} from './styles'
import {   Controller } from "react-hook-form";
const Input = ({leftIcon, name, control, errorMessage, ...rest}) => {
  return (
    <>
      <InputContainer>
          {leftIcon ? (<IconConteiner>{leftIcon}</IconConteiner>) : null}
          
          <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) =>   <InputText {...field} {...rest} />}
          />
      </InputContainer>
      {errorMessage ? <ErroText>{errorMessage}</ErroText> : null}
    </>
  )
}
    

export {Input};
