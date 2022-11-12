import { useEffect, useState } from 'react';
import DevTrackIcon from '../../../assets/blue-dev.svg';
import QATrackIcon from '../../../assets/blue-qa.svg';
import UXTrackIcon from '../../../assets/blue-ux.svg';
import DotsMenu from '../../../assets/dots-menu.svg';
import '../../../styles/utils.css';
import ProgressBar from '../../ProgressBar';
import { DotsMenuImage, StartDate, TrackImage, TrackTitle, TrackWrapper } from './styled';

export default function UserTracks({ trackName, progressNumbers }) {
    const [trackStyle, setTrackStyle] = useState({
        icon: '',
        bgColor: ''
    });

    const handleIconPath = (trackName) => {
        if (trackName === 'Desenvolvimento FullStack') {
            return setTrackStyle({ ...trackStyle, icon: DevTrackIcon, bgColor: 'var(--primary-color-800)' });
        }
        if (trackName === 'Analista QA') {
            return setTrackStyle({ ...trackStyle, icon: QATrackIcon, bgColor: 'var(--secondary-color-400)' });
        }
        if (trackName === 'UX/UI Design') {
            return setTrackStyle({ ...trackStyle, icon: UXTrackIcon, bgColor: 'var(--secondary-color-800)' });
        }
    }

    useEffect(() => {
        handleIconPath(trackName);
    }, []);

    return (
        <TrackWrapper className='column space-btw'>
            <div className='row space-btw'>
                <div className='column'>
                    <TrackImage src={trackStyle.icon} />
                    <TrackTitle >
                        {trackName}
                    </TrackTitle>
                    <StartDate>
                        05/11/22
                    </StartDate>
                </div>
                <DotsMenuImage src={DotsMenu} alt="dots menu" />
            </div>
            <ProgressBar trackStyle={trackStyle} progressNumbers={progressNumbers} />
        </TrackWrapper>
    )
}