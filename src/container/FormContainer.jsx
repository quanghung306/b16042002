import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import FormField from "../componets/FormField";
const FormContainer = ({onSubmitData}) => {
  const [emailValue, setEmailValue] = useState("");
  const onEmailValueChange = (e) =>{
    setEmailValue(e.target.value);
    console.log("", e.target.value);
  };
  const [passwordValue, setPasswordValue] = useState("");
  const onPasswordlValueChange = (e) => {
    setPasswordValue(e.target.value);
    console.log("", e.target.value);
  };
  const [addressValue, setAddressValue] = useState("");
  const onAddresslValueChange = (e) => {
    setAddressValue(e.target.value);
    console.log("", e.target.value);
  };
  const [phoneValue, setPhoneValue] = useState('');
  const onPhonelValueChange = (e) => {
   
    setPhoneValue(e.target.value)
    console.log("", e.target.value);
  };
  const onSubmit=(e)=>{
   e.preventDefault();
    if (isNaN(phoneValue)) {
        alert()
       return;
    };
    const oj={
        id:Math.random(),
        email:emailValue,
        password:passwordValue,
        address:addressValue,
        phoneNumber:phoneValue,
    };
    onSubmitData(oj);
  };
  return (
    <Form>
      <Row>
        <Col md={6}>
          <FormField
            name="email"
            placeholder="with a placeholder"
            Label="Email"
            type="email"
            value={emailValue}
            onChange={onEmailValueChange}
          />
        </Col>
        <Col md={6}>
          <FormField
            name="password"
            placeholder="password placeholder"
            Label="examplePassword"
            type="password"
            value={passwordValue}
            onChange={onPasswordlValueChange}
          />
        </Col>
      </Row>
      <FormField
        name="Address"
        placeholder="Address placeholder"
        Label="Address"
        type="text"
        value={addressValue}
        onChange={onAddresslValueChange}
      />
      <Col md={6}>
          <FormField
            name="PhoneNumber"
            placeholder="PhoneNumber placeholder"
            Label="PhoneNumber"
            type="text"
            value={phoneValue}
            onChange={onPhonelValueChange}
          />
        </Col>

      <Button onClick={onSubmit}>Sign in</Button>
    </Form>
  );
};

export default FormContainer;
