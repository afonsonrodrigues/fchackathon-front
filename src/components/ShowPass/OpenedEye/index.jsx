import { Eye } from 'phosphor-react';
import { EyeContainer } from '../ClosedEye/styled';

export default function OpenedEye({ showPass, setShowPass }) {
    return (
        <EyeContainer
            onClick={(e) => setShowPass(!showPass)}
            className='column align-center justify-center'
        >
            <Eye className='z-index-2' size={20} />
        </EyeContainer>
    )
}