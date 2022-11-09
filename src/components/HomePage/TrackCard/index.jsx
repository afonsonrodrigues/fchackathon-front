import { useEffect, useState } from 'react';
import ClockIcon from '../../../assets/clock-icon.svg';
import ArrowDown from '../../../assets/arrow-down.svg';
import tracksInfo from '../../../utils/tracksInfo';
import { CardContainer, ActionContainer, AccessTrackButton, ClockImage, ArrowUpImage, TrackTitle, TrackSubtitle, TrackResume, ExpectedTime } from './styled';
import { NavLink } from 'react-router-dom';
import '../../../styles/utils.css';

export default function TrackCard({ trackName, trackId, setCurrentTrack }) {
    const [trackInfo, setTrackInfo] = useState({ ...tracksInfo[trackId] });

    const handleCloseCard = () => {
        setCurrentTrack({
            open: false,
            trackId: null,
            trackName: ''
        });
    }

    useEffect(() => {
        setTrackInfo({ ...tracksInfo[trackId] });
    }, [trackName, trackId]);

    return (
        <CardContainer className='row space-btw' id='track-card'>
            <ArrowUpImage onClick={handleCloseCard} src={ArrowDown} alt="arrow up to close card" />
            <ActionContainer className='column space-btw'>
                <div className='column gap-20'>
                    <TrackTitle>{trackName}</TrackTitle >
                    <TrackSubtitle>{trackInfo.one}</TrackSubtitle>
                    <TrackResume>{trackInfo.two}</TrackResume>
                </div>
                <AccessTrackButton className='call-button'>
                    <NavLink to={`/track/${trackId}`}>Acesse essa trilha</NavLink>
                </AccessTrackButton>
            </ActionContainer>
            <div>
                <div className='row align-center gap-4'>
                    <ClockImage src={ClockIcon} alt="clock icon" />
                    <ExpectedTime>{`Tempo estimado: ${trackId} horas`}</ExpectedTime>
                </div>
            </div>
        </CardContainer>
    )
}