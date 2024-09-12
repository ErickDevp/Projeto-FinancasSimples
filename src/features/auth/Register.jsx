import {  FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash  } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import '../../assets/styles/Register.css'
import Container from '../../components/layout/Container';
import AuthWithGoogle from '../../components/common/AuthWithGoogle.jsx';
import { useAuthForm } from '../../hooks/useAuthForm.js';

export default function Register() {
    const {
        isEmailEmpty,
        isEmailValid,
        isPasswordValid,
        isPasswordEmpty,
        isNameEmpty,
        isLastNameEmpty,
        handleLastNameChange,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit,
        handleComfirmPasswordChange,
        isConfirmPasswordEmpty,
        isPasswordMatch,
        isPasswordStrong
      } = useAuthForm();

    return (
        <Container>
            <div className='container_segundary'>
                <form onSubmit={handleSubmit}>
                    <h1>Crie sua conta</h1>
                    <div className='inputs'>
                        <Input 
                            type='text'
                            placeholder='Nome' 
                            icon={<FaUser/>}
                            onChange={handleNameChange}
                        />
                        {!isNameEmpty && <span className='erro'>Campo obrigatório!</span>}

                        <Input 
                            type='text'
                            placeholder='Sobrenome' 
                            icon={<FaUser/>}
                            onChange={handleLastNameChange}
                        />
                        {!isLastNameEmpty && <span className='erro'>Campo obrigatório!</span>}                  

                        <Input 
                            type='email'
                            placeholder='E-mail' 
                            icon={<FaEnvelope/>}
                            onChange={handleEmailChange}
                        />
                        {!isEmailEmpty ? <span className='erro'>Campo obrigatório!</span> : 
                         !isEmailValid && <span className='erro'>Email inválido!</span>}

                        <Input 
                            type='password'
                            placeholder='Senha' 
                            icon={<FaLock/>} 
                            iconVisibility={<FaEye/>} 
                            iconVisibilityOf={<FaEyeSlash/>}
                            onChange={handlePasswordChange}
                        />
                        {!isPasswordEmpty ? <span className='erro'>Campo obrigatório!</span> : 
                         !isPasswordValid ? <span className='erro'>senha muito curta!</span> : 
                         !isPasswordStrong && <span className='erro'>senha fraca!</span>}
                        <Input 
                            type='password'
                            placeholder='Repita a senha' 
                            icon={<FaLock/>} 
                            iconVisibility={<FaEye/>} 
                            iconVisibilityOf={<FaEyeSlash/>}
                            onChange={handleComfirmPasswordChange}
                        />
                        {!isConfirmPasswordEmpty ? <span className='erro'>Campo obrigatório!</span> : 
                         !isPasswordMatch && <span className='erro'>As senhas não coincidem</span>}
                    </div>
                    <Button textBtn='Criar conta' marginTop={'40px'}/>
    
                </form>
                <p className='p_center' style={{marginTop: '30px', fontWeight: 'bold'}}>Ou crie uma conta com</p>
                <AuthWithGoogle/>
                <p className='p_center'>
                    já tem uma conta? <Link to='/login'>Entrar</Link>
                </p>
            </div>
        </Container>
    )
}