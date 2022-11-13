import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DevTrackIcon from '../../../assets/blue-dev.svg';
import QATrackIcon from '../../../assets/blue-qa.svg';
import UXTrackIcon from '../../../assets/blue-ux.svg';
import DotsMenu from '../../../assets/dots-menu.svg';
import '../../../styles/utils.css';
import ProgressBar from '../../ProgressBar';
import { DotsMenuImage, StartDate, TrackImage, TrackTitle, TrackWrapper } from './styled';

export default function UserTracks({ trackName, trackId, userSignedTracks, progressNumbers }) {
    const navigate = useNavigate();
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
        <TrackWrapper
            style={{ border: `1px solid ${trackStyle.bgColor}` }}
            className='w-[348px] h-[275px] p-6 mb-4 sm:mb-0 sm:min-w-[344px] sm:min-h-[263px]'
            onClick={(e) => navigate(`/track/${trackId}`, { state: { trackName, trackId, userSignedTracks } })}
        >
            <div className='flex justify-between mb-16'>
                <div className='flex flex-col'>
                    <TrackImage className='w-[72px] mb-6' src={trackStyle.icon} />
                    <TrackTitle className='mb-2 font-bold text-base' >
                        {trackName}
                    </TrackTitle>
                    <StartDate className='text-sm'>
                        Iniciada em 05/11/22
                    </StartDate>
                </div>
                <DotsMenuImage src={DotsMenu} alt="dots menu" />
            </div>
            <div>
                <ProgressBar trackStyle={trackStyle} progressNumbers={progressNumbers} />
            </div>
        </TrackWrapper>
    )
}