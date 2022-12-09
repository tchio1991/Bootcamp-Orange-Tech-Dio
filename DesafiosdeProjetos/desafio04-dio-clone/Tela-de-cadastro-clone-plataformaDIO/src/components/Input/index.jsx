import { Controller } from "react-hook-form";

import { InputContainer, InputText, IconContainer } from "./styles";

export default function Input({ leftIcon, name, control, ...rest }) {
  return (
    <InputContainer>
      {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
      <Controller
        name={name}
        control={control}
        render={({ field }) => <InputText {...field} {...rest} />}
      />
    </InputContainer>
  );
}