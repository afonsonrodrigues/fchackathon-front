import { useEffect, useState } from 'react';
import ClockIcon from '../../../assets/clock-icon.svg';
import ArrowDown from '../../../assets/arrow-down.svg';
import tracksInfo from '../../../utils/tracksInfo';
import { CardContainer, ActionContainer, AccessTrackButton, ClockImage, ArrowUpImage } from './styled';
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
        <CardContainer className='row space-btw'>
            <ArrowUpImage onClick={handleCloseCard} src={ArrowDown} alt="arrow up to close card" />
            <ActionContainer className='column space-btw'>
                <div className='column gap-24'>
                    <h1>{`${trackName} | Orange Evolution`}</h1>
                    <p>{trackInfo.one}</p>
                    <p>{trackInfo.two}</p>
                </div>
                <AccessTrackButton>
                    <NavLink to={`/track/${trackId}`}>Acesse essa trilha</NavLink>
                </AccessTrackButton>
            </ActionContainer>
            <div>
                <div className='row align-center'>
                    <ClockImage src={ClockIcon} alt="clock icon" />
                    <p>{`Tempo estimado: ${trackId} horas`}</p>
                </div>
            </div>
        </CardContainer>
    )
}