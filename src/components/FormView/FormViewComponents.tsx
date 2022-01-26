import React, { ChangeEventHandler, VoidFunctionComponent } from "react";
import styled, { css } from "styled-components";
import { maxMargin } from "../../assets/CSSRules";
import { mediaSizes } from "../../assets/CSSMediaSizes";
import { MainButtonCSS } from "../AbstractedComponents";

const { tablet } = mediaSizes;

// Components Props Types

type FormImputTemplateProps = {
  id: string;
  ifList?: boolean;
  inputPlaceholder: string;
  labelPlaceholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  type?: string;
  value: string;
};

// Styled Components

export const FormBG = styled.div`
  ${maxMargin}
  margin: 3em 0;
  padding: 2em 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-image: url(${require("../../assets/img/LandingBG.png")}),
    linear-gradient(1deg, #eff7ff 0%, #c9e6ff 100%);
  opacity: 1;
`;

export const FormTitle = styled.h2`
  margin: 2em 0;
  font: normal normal normal 1.75em "Montserrat";
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: space-around;
  align-items: flex-end;
`;

export const FormImage = styled.img`
  width: 40%;
  height: 40%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 35em;
  padding: 3em 2em;
  background: #fff;
  box-shadow: 0px 20px 60px #3e3e3e29;
  border-radius: 8px;
  justify-content: space-around;

  @media screen and (max-width: ${tablet}) {
    width: 90%;
  }
`;

export const FormLabel = styled.label`
  font-size: 0.9em;
  font-weight: 500;
`;

const FormInputCSS = css`
  width: 100%;
  outline: 0;
  padding: 1em 0;
  font-family: Poppins;
  border-width: 0 0 2px;
  border-color: #e5e5e5;

  &:focus {
    border-color: #000;
  }
`;

export const FormInput = styled.input`
  ${FormInputCSS}
`;

export const FormTextarea = styled.textarea`
  ${FormInputCSS}
`;

export const FormDoubleInput = styled.div`
  width: 100%;
  display: flex;
  gap: 1em;
`;

export const FormInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FormButton = styled.button`
  ${MainButtonCSS}
`;

// Functional Components

export const FormInputTemplate: VoidFunctionComponent<
  FormImputTemplateProps
> = ({
  id,
  ifList,
  onChange,
  inputPlaceholder,
  labelPlaceholder,
  type,
  value,
}) => {
  return (
    <FormInputWrapper>
      <FormLabel htmlFor={id}>{labelPlaceholder}</FormLabel>
      <FormInput
        id={id}
        list={ifList ? `${id}List` : ""}
        onChange={onChange}
        placeholder={inputPlaceholder}
        type={type ? type : ""}
        value={value}
      />
    </FormInputWrapper>
  );
};
