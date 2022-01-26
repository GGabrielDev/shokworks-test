import axios from "axios";
import React, {
  useState,
  ChangeEventHandler,
  MouseEvent,
  VoidFunctionComponent,
} from "react";
import {
  Form,
  FormBG,
  FormButton,
  FormDoubleInput,
  FormImage,
  FormInputTemplate,
  FormInputWrapper,
  FormLabel,
  FormTextarea,
  FormTitle,
  FormWrapper,
} from "./FormViewComponents";

const FormView: VoidFunctionComponent = () => {
  const [formData, setFormData] = useState<{ [index: string]: string }>({
    firstName: "",
    lastName: "",
    email: "",
    problem: "",
    details: "",
  });

  const validateEntriesNotEmpty: (arg0: { [index: string]: any }) => boolean = (
    formObject
  ) => {
    return Object.values(formObject).every(Boolean);
  };

  const validateEmail: (arg0: string) => boolean = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange: (
    input: string
  ) => ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> =
    (input) => (e) => {
      setFormData({
        ...formData,
        [input]: e.target.value,
      });
    };

  const handleSubmit: () => (arg0: MouseEvent) => void = () => (e) => {
    e.preventDefault();

    if (!validateEntriesNotEmpty(formData))
      return alert("Please, fill all the entries of the form");

    if (!validateEmail(formData.email))
      return alert("We're sorry, but the given Email adress is invalid");

    axios
      .post("https://jsonplaceholder.typicode.com/posts", formData, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        console.log(response.data);
        return alert("Your form was submitted successfully");
      });
  };

  return (
    <FormBG>
      <FormTitle>
        Facing Problem?
        <br />
        <b>Let's Get In Touch Now</b>
      </FormTitle>
      <FormWrapper>
        <Form>
          <FormDoubleInput>
            <FormInputTemplate
              id="firstName"
              labelPlaceholder="First Name"
              inputPlaceholder="Robert Lee"
              onChange={handleChange("firstName")}
              type="text"
              value={formData.firstName}
            />
            <FormInputTemplate
              id="lastName"
              labelPlaceholder="Last Name"
              inputPlaceholder="Anderson"
              onChange={handleChange("lastName")}
              type="text"
              value={formData.lastName}
            />
          </FormDoubleInput>
          <FormInputTemplate
            id="email"
            labelPlaceholder="Your Email Adress"
            inputPlaceholder="kevin.jones@mail.com"
            onChange={handleChange("email")}
            type="email"
            value={formData.email}
          />
          <FormInputTemplate
            id="problem"
            ifList
            labelPlaceholder="Which Related Problem You Are Facing?"
            inputPlaceholder="Select One"
            onChange={handleChange("problem")}
            value={formData.problem}
          />
          <datalist id="problemList">
            <option value="Lorem ipsum dolor sit amet" />
            <option value="Consectetur adipiscing elit" />
            <option value="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
          </datalist>
          <FormInputWrapper>
            <FormLabel htmlFor="details">Type Your Message</FormLabel>
            <FormTextarea
              id="details"
              onChange={handleChange("details")}
              placeholder="Here goes your message"
              rows={4}
              value={formData.details}
            />
          </FormInputWrapper>
          <FormButton onClick={handleSubmit()}>Submit</FormButton>
        </Form>
        <FormImage src={require("../../assets/img/FormPicture.png")} />
      </FormWrapper>
    </FormBG>
  );
};

export default FormView;
