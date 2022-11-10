import LoginForm from '../../components/LoginForm';
import { OuterBg } from '../../components/OuterBg/styled';
import { OuterTitle } from './styled';

export default function Login() {
    return (
        <OuterBg className='column align-center justify-center'>
            <OuterTitle>Orange Evolution</OuterTitle>
            <LoginForm />
        </OuterBg>
    )
}