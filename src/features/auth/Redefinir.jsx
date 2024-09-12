import { FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuthForm } from '../../hooks/useAuthForm';
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import '../../assets/styles/Redefinir.css';
import Container from '../../components/layout/Container';

export default function Redefinir() {
    const {
        isEmailValid,
        handleEmailChange,
        handleEmailBlur,
      } = useAuthForm();

    return (
        <Container padding='90px'>
            <div className='container_segundary'>
                <form>
                    <h1>Redefinir senha</h1>
                    <div className='inputs' style={{marginBottom: '25px'}}>
                        <Input 
                            type='email' 
                            placeholder='E-mail' 
                            icon={<FaEnvelope/>}
                            onChange={handleEmailChange}
                            onBlur={handleEmailBlur}
                        />
                        {!isEmailValid && <span className='erro'>Email inválido</span>}
                    </div>
                    <Button 
                        textBtn='REDEFINIR SENHA' marginTop={'0px'}
                    />
                    <p className='p_center'>
                        <Link to='/login'>Voltar</Link>
                    </p>
                </form>
            </div>
        </Container>
    )
}