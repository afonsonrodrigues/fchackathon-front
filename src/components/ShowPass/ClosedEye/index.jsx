import { EyeClosed } from 'phosphor-react';
import { EyeContainer } from './styled';
import '../../../styles/utils.css';

export default function ClosedEye({ showPass, setShowPass }) {
    return (
        <EyeContainer
            onClick={(e) => setShowPass(!showPass)}
            className='w-8 h-8 flex flex-column items-center justify-center mr-2'
        >
            <EyeClosed className='z-index-2' size={20} />
        </EyeContainer>
    )
}