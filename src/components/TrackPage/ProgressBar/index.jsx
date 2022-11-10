import { ProgressBarContainer, Title, ProgressValue, ProgressBarUnder, ProgressBarOver } from './styled';
import '../../../styles/utils.css';

export default function ProgressBar() {
    let testValue = 5;

    return (
        <ProgressBarContainer className='column'>
            <Title>
                Meu progresso
            </Title>
            <ProgressValue>
                {testValue}%
            </ProgressValue>
            <ProgressBarOver>
                <ProgressBarUnder/>
            </ProgressBarOver>
        </ProgressBarContainer>
    )
}