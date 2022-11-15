import '../../../styles/utils.css';
import ProgressBar from '../../ProgressBar';
import { ProgressBarWrapper, Title } from './styled';

export default function ProgressBarContainer({ trackInfo, text, trackStyle }) {
    return (
        <ProgressBarWrapper className='flex flex-col items-end w-[280px]'>
            <Title className='self-center lg:self-end'>
                Meu progresso
            </Title>
            <ProgressBar text='0' trackInfo={trackInfo} trackStyle={trackStyle} />
        </ProgressBarWrapper>
    )
}