import { useState } from 'react';
import { isFieldEmpty, isValidEmail, isPasswordMatching, isPasswordLengthValid, strengthenPassword } from '../utils/validation';

export function useAuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isNameEmpty, setIsNameEmpty ] = useState(true)
  const [isEmailEmpty, setIsEmailEmpty] = useState(true);
  const [isLastNameEmpty, setIsLastNameEmpty ] = useState(true)
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(true);
  const [isConfirmPasswordEmpty, setIsConfirmPasswordEmpty] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isPasswordStrong, setIsPasswordStrong] = useState(true);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    

    setIsEmailEmpty(isFieldEmpty(email));
    setIsPasswordEmpty(isFieldEmpty(password));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    console.log('email:', email);
    console.log('senha:', password);

    setIsEmailEmpty(isFieldEmpty(email));
    setIsPasswordEmpty(isFieldEmpty(password));
    setIsNameEmpty(isFieldEmpty(firstName));
    setIsLastNameEmpty(isFieldEmpty(lastName));
    setIsConfirmPasswordEmpty(isFieldEmpty(confirmPassword));
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setFirstName(newName);

    setIsNameEmpty(isFieldEmpty(newName));
  };

  const handleLastNameChange = (e) => {
    const newLasttName = e.target.value;
    setLastName(newLasttName);

    setIsLastNameEmpty(isFieldEmpty(newLasttName));
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    setIsEmailEmpty(isFieldEmpty(newEmail));
    setIsEmailValid(isValidEmail(newEmail));
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    setIsPasswordEmpty(isFieldEmpty(newPassword));
    setIsPasswordValid(isPasswordLengthValid(newPassword));
    setIsPasswordStrong(strengthenPassword(newPassword));
  };

  const handleComfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    setIsConfirmPasswordEmpty(isFieldEmpty(newConfirmPassword));
    setIsPasswordMatch(isPasswordMatching(password, newConfirmPassword));
  }

  return {
    isEmailEmpty,
    isEmailValid,

    isPasswordValid,
    isPasswordEmpty,
    isPasswordStrong,

    isNameEmpty,
    isLastNameEmpty,

    handleLastNameChange,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleRegisterSubmit,
    handleLoginSubmit,

    isConfirmPasswordEmpty,
    isPasswordMatch,
    handleComfirmPasswordChange
  };
}
