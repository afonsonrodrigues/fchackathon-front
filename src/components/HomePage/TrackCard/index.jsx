import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowDown from '../../../assets/blue-arrow-down.svg';
import BlueClock from '../../../assets/blue-clock.svg';
import '../../../styles/utils.css';
import tracksInfo from '../../../utils/tracksInfo';
import { AccessTrackButton, ActionContainer, ArrowUpImage, CardContainer, ClockImage, ExpectedTime, TrackResume, TrackSubtitle, TrackTitle } from './styled';

export default function TrackCard({ trackName, trackId, setCurrentTrack }) {
    const [trackInfo, setTrackInfo] = useState({ ...tracksInfo[trackId] });
    const navigate = useNavigate();

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
                <AccessTrackButton onClick={(e) => navigate(`/track/${trackId}`, { state: { trackName, trackId } })} className='call-button'>
                    Acesse essa trilha
                </AccessTrackButton>
            </ActionContainer>
            <div>
                <div className='row align-center gap-4'>
                    <ClockImage src={BlueClock} alt="clock icon" />
                    <ExpectedTime>{`Tempo estimado: ${trackId} horas`}</ExpectedTime>
                </div>
            </div>
        </CardContainer>
    )
}