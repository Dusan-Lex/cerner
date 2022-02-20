import styled from "styled-components";
import Button from "../shered/Components/Button";
import Title from "../shered/Components/Title";

import { color, mixin } from "../shered/styles";

const StyledContactUs = styled.section`
  padding: 2rem 18rem;

  @media only screen and (max-width: 1300px) {
    padding: 2rem 8rem;
  }
  @media only screen and (max-width: 900px) {
    padding: 2rem 3rem;
  }
`;

const ContactForm = styled.form`
  margin: auto;
  max-width: 100rem;
  width: 100%;
  display: flex;
  label {
    font-size: 1.9rem;
    color: ${color.secondary};
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const ContactFormBox1 = styled.div`
  width: 40%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
const ContactFormBox2 = styled.div`
  width: 60%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  @media only screen and (max-width: 600px) {
    width: 100%;
    padding-top: 1rem;
    button {
      margin: 3rem auto;
    }
  }
`;

const ContactFormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  margin-top: 0.8rem;
  font-size: 1.8rem;
  /* border: 1px solid grey; */
  color: ${color.secondary};
  ${mixin.placeholderColor(color.secondary)}
  &:focus {
    border: 1px solid ${color.primary};
    box-shadow: 0px 0px 3px ${color.primary};
  }
`;

const StyledContactFormInput = styled.div`
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
  input {
    width: 100%;
    /* border: 1px solid grey; */
    height: 5rem;
    padding: 1rem;
    margin-top: 0.8rem;
    font-size: 1.8rem;
    color: ${color.secondary};
    ${mixin.placeholderColor(color.secondary)}
    &:focus {
      border: 1px solid ${color.primary};
      box-shadow: 0px 0px 3px ${color.primary};
    }
  }
`;

const ContactFormInput = ({
  type,
  name,
  placeholder,
}: {
  type: string;
  name: string;
  placeholder: string;
}) => {
  return (
    <StyledContactFormInput>
      <label htmlFor={name}>{name}</label>
      <input id={name} type={type} placeholder={placeholder} />
    </StyledContactFormInput>
  );
};

const ContactUs = () => {
  return (
    <StyledContactUs>
      <Title
        color1={color.secondary}
        color2={color.primary}
        margin="1rem auto"
        padding="0 3rem"
      >
        Contact Us
      </Title>
      <ContactForm
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <ContactFormBox1>
          <ContactFormInput
            type="text"
            name="Name"
            placeholder="John"
          ></ContactFormInput>
          <ContactFormInput
            type="text"
            name="Lastname"
            placeholder="Doe"
          ></ContactFormInput>
          <ContactFormInput
            type="email"
            name="Email address"
            placeholder="johndoe@gmail.com"
          ></ContactFormInput>
        </ContactFormBox1>
        <ContactFormBox2>
          <div style={{ width: "100%" }}>
            <label htmlFor="message">Message</label>
            <ContactFormTextarea
              id="message"
              rows={7}
              placeholder="message"
            ></ContactFormTextarea>
          </div>
          <Button
            color={color.tertiary}
            bgColor={color.primary}
            fontSize="1.7rem"
            padding="1.6rem 6rem"
            margin="3rem 0 0 0"
            after
          >
            Send message
          </Button>
        </ContactFormBox2>
      </ContactForm>
    </StyledContactUs>
  );
};

export default ContactUs;
