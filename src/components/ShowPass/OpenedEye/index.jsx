import { Eye } from 'phosphor-react';
import { EyeContainer } from '../ClosedEye/styled';

export default function OpenedEye({ showPass, setShowPass }) {
    return (
        <EyeContainer
            onClick={(e) => setShowPass(!showPass)}
            className='w-8 h-8 flex flex-column items-center justify-center mr-2'
        >
            <Eye />
        </EyeContainer>
    )
}