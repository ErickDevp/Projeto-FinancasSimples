import { useAuthForm } from '../../hooks/useAuthForm.js';
import {  FaEnvelope, FaLock, FaEye, FaEyeSlash  } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Container from '../../components/layout/Container';
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import AuthWithGoogle from '../../components/common/AuthWithGoogle.jsx';

export default function Login() {
    const {
        isEmailEmpty,
        isEmailValid,
        isPasswordEmpty,
        handleEmailChange,
        handlePasswordChange,
        handleLoginSubmit,
      } = useAuthForm();

    return (
        <Container>
            <div className='container_segundary'>
                <form onSubmit={handleLoginSubmit}>
                    <h1>Entre com sua conta</h1>   
                    <div className='inputs'>
                        <Input 
                            type='email' 
                            icon={<FaEnvelope/>} 
                            placeholder="E-mail" 
                            onChange={handleEmailChange}
                        />
                        {!isEmailEmpty ? <span className='erro'>Campo obrigatório!</span> :
                         !isEmailValid && <span className='erro'>Email inválido!</span>}

                        <Input 
                            type='password' 
                            icon={<FaLock/>} 
                            iconVisibility={<FaEye/>} 
                            iconVisibilityOf={<FaEyeSlash/>} 
                            placeholder="Senha" 
                            onChange={handlePasswordChange}
                        />
                        <div style={{display: 'flex', position:'relative'}}>
                            {!isPasswordEmpty && <span className='erro'>Campo obrigatório!</span>}
                            <Link to='/redefenir-senha' style={{textAlign: 'end', position:'absolute', right:0, top: 0}}>Esqueci minha senha</Link>
                        </div>

                    </div>
                    <Button textBtn="Entrar" marginTop={'50px'}/>
                </form>
                <p className='p_center' style={{marginTop: '25px', fontWeight: 'bold'}}>Ou entre com</p>
                <AuthWithGoogle/>
                <p className='p_center'>Não tem uma conta? <Link to='/Register'>Registre-se</Link></p>
            </div>
        </Container>
    )
}