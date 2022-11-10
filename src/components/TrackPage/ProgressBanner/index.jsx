import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import WhiteClock from '../../../assets/white-clock.svg';
import DevTrackIcon from '../../../assets/white-dev.svg';
import QATrackIcon from '../../../assets/white-qa.svg';
import UXTrackIcon from '../../../assets/white-ux.svg';
import '../../../styles/utils.css';
import ProgressBar from '../ProgressBar';
import { BannerContainer, CenterContent, ProgressBarContainer, TrackBy, TrackTime, TrackTitle } from './styled';

export default function ProgressBanner({ userSigned, setUserSigned }) {
    const [trackStyle, setTrackStyle] = useState({
        icon: '',
        bgColor: ''
    });
    const location = useLocation();

    const handleIconPath = () => {
        if (location.state.trackName === 'Desenvolvimento FullStack') {
            return setTrackStyle({ ...trackStyle, icon: DevTrackIcon, bgColor: 'var(--primary-color-800' });
        }
        if (location.state.trackName === 'Analista QA') {
            return setTrackStyle({ ...trackStyle, icon: QATrackIcon, bgColor: 'var(--secondary-color-400' });
        }
        if (location.state.trackName === 'UX/UI Design') {
            return setTrackStyle({ ...trackStyle, icon: UXTrackIcon, bgColor: 'var(--secondary-color-800' });
        }
    }

    const handleGetProgress = () => {

    }

    useEffect(() => {
        handleIconPath();
    }, []);

    return (
        <BannerContainer style={{ backgroundColor: `${trackStyle.bgColor}` }} className="row space-btw">
            <CenterContent className="row space-btw align-center">
                <div className='row gap-32'>
                    <img src={trackStyle.icon} alt="track icon" />
                    <div className='column'>
                        <TrackTitle>{location.state.trackName}</TrackTitle>
                        <TrackBy style={{ marginBottom: '1.3rem' }}>Trilha por Orange Juice</TrackBy>
                        <div className='row align-center gap-4'>
                            <img src={WhiteClock} alt="clock icon" />
                            <TrackTime>Tempo estimado: 30 horas</TrackTime>
                        </div>
                    </div>
                </div>
                <ProgressBarContainer className='column justify-end'>
                    {userSigned && <ProgressBar />}
                </ProgressBarContainer>
            </CenterContent>
        </BannerContainer>
    );
}
