import LoginForm from '../../components/LoginForm';
import { OuterBg } from './styled';

export default function Login() {
    return (
        <OuterBg className='column align-center justify-center'>
            <h1>Orange Evolution</h1>
            <LoginForm />
        </OuterBg>
    )
}