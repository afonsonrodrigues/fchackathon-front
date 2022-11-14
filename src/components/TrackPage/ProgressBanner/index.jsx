import { useEffect, useState } from 'react';
import WhiteClock from '../../../assets/white-clock.svg';
import DevTrackIcon from '../../../assets/white-dev.svg';
import QATrackIcon from '../../../assets/white-qa.svg';
import UXTrackIcon from '../../../assets/white-ux.svg';
import '../../../styles/utils.css';
import ProgressBar from '../ProgressBarContainer';
import { BannerContainer, CenterContent, ProgressBarContainer, TrackBy, TrackTime, TrackTitle } from './styled';

export default function ProgressBanner({ trackInfo, progressNumbers, trackName }) {
    const [trackStyle, setTrackStyle] = useState({
        icon: '',
        bgColor: '',
        mb: ''
    });

    const handleIconPath = () => {
        if (trackName === 'Desenvolvimento FullStack') {
            return setTrackStyle({ ...trackStyle, icon: DevTrackIcon, bgColor: 'var(--primary-color-800)', mb: '-12px' });
        }
        if (trackName === 'Analista QA') {
            return setTrackStyle({ ...trackStyle, icon: QATrackIcon, bgColor: 'var(--secondary-color-400)', mb: '24px' });
        }
        if (trackName === 'UX/UI Design') {
            return setTrackStyle({ ...trackStyle, icon: UXTrackIcon, bgColor: 'var(--secondary-color-800)', mb: '24px' });
        }
    }

    useEffect(() => {
        handleIconPath();
    }, [trackInfo]);

    return (
        <BannerContainer style={{ backgroundColor: `${trackStyle.bgColor}` }} className='h-[478px] sm:h-[418px] lg:h-[360px]  lg:flex-col lg:items-center xl:flex'>
            <CenterContent className="flex flex-col pt-[104px] sm:pt-[168px] items-center gap-8 lg:flex-row lg:justify-between xl:w-[1280px]" >
                <div className='flex flex-col items-center sm:flex-row sm:self-start  sm:pl-16 sm:items-start sm:gap-8'>
                    <img className='w-[116px] h-[116px] mb-2' src={trackStyle.icon} alt="track icon" />
                    <div className='flex flex-col items-center sm:items-start'>
                        <TrackTitle className='text-[32px] text-center font-bold leading-10 mb-2'>{trackName}</TrackTitle>
                        <TrackBy className='mb-2'>Trilha por Orange Juice</TrackBy>
                        <div style={{ marginBottom: `${trackStyle.mb}` }} className='flex items-center gap-4'>
                            <img src={WhiteClock} alt="clock icon" />
                            <TrackTime>Tempo estimado: 30 horas</TrackTime>
                        </div>
                    </div>
                </div>
                <ProgressBarContainer className='sm:self-end sm:mr-8 lg:self-center'>
                    {trackInfo?.userSigned && <ProgressBar trackInfo={trackInfo} trackStyle={trackStyle} />}
                </ProgressBarContainer>
            </CenterContent >
        </BannerContainer >
    );
}
