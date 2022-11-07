import ArrowDownIcon from '../../../assets/arrow-down.svg';
import TrackIcon from '../../../assets/track-icon.svg';
import '../../../styles/utils.css';
import { ArrowDown, TrackWrapper } from './styled';

export default function Track({ trackName, trackId, currentTrack, setCurrentTrack }) {
    const handleSetCurrentTrack = (e) => {
        if (currentTrack.open) {
            return setCurrentTrack({ open: true, trackName, trackId });
        }

        return setCurrentTrack({ open: true, trackName, trackId });
    }

    return (
        <div className='column'>
            <TrackWrapper onClick={handleSetCurrentTrack} className='column align-center space-btw'>
                {trackName === 'Desenvolvimento FullStack' && <img src={TrackIcon} alt="track icon" />}
                {trackName === 'Analista QA' && <img src={TrackIcon} alt="track icon" />}
                {trackName === 'UX/UI Design' && <img src={TrackIcon} alt="track icon" />}
                <h2>{trackName}</h2>
                <ArrowDown src={ArrowDownIcon} alt="arrow down to open card" />
            </TrackWrapper>
        </div>
    )
}