import { useEffect, useState } from 'react';
import '../../../styles/utils.css';
import { ProgressBarWrapper, Title } from './styled';
import ProgressBar from '../../ProgressBar';

export default function ProgressBarContainer({ trackInfo, text }) {
    const [progressNumbers, setProgressNumbers] = useState({
        completion: null,
        current: null
    });

    const getCompletion = trackInfo.trackContent.length;
    const filterCurrent = trackInfo.trackContent.filter((item) => {
        return item.complete === true;
    });
    const percentage = ((100 * filterCurrent.length) / getCompletion).toFixed()

    useEffect(() => {
        setProgressNumbers({ completion: getCompletion, current: percentage });
    }, [trackInfo]);

    return (
        <ProgressBarWrapper className='column'>
            <Title>
                Meu progresso
            </Title>
            <ProgressBar text='' progressNumbers={progressNumbers} />
        </ProgressBarWrapper>
    )
}