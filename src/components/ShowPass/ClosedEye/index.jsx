import { EyeClosed } from 'phosphor-react';
import { EyeContainer } from './styled';
import '../../../styles/utils.css';

export default function ClosedEye({ showPass, setShowPass }) {
    return (
        <EyeContainer
            onClick={(e) => setShowPass(!showPass)}
            className='column align-center justify-center'
        >
            <EyeClosed className='z-index-2' size={20} />
        </EyeContainer>
    )
}