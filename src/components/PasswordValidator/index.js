// Write your code here

import {useState} from 'react'

import {
  PasswordContainer,
  InputContainer,
  Heading,
  Paragraph,
  Input,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [isValid, setValidPassword] = useState('')
  const errorMessage =
    isValid.length < 8 ? 'Your password must be at least 8 characters ' : ' '

  const onChangePassword = event => {
    setValidPassword(event.target.value)
  }

  return (
    <PasswordContainer>
      <InputContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <Input type="password" value={isValid} onChange={onChangePassword} />
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </InputContainer>
    </PasswordContainer>
  )
}

export default PasswordValidator
