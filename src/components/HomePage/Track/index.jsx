import { TrackWrapper, ArrowDown } from './styled';
import TrackIcon from '../../../assets/track-icon.svg';
import ArrowDownIcon from '../../../assets/arrow-down.svg';
import '../../../styles/utils.css';

export default function Track({ trackName, trackId }) {
    console.log(trackName);
    return (
        <TrackWrapper className='column align-center space-btw'>
            {trackName === 'Desenvolvimento FullStack' && <img src={TrackIcon} alt="track icon" />}
            {trackName === 'Analista QA' && <img src={TrackIcon} alt="track icon" />}
            {trackName === 'UX/UI Design' && <img src={TrackIcon} alt="track icon" />}
            <h2>{trackName}</h2>
            <ArrowDown src={ArrowDownIcon} alt="arrow down icon" />
        </TrackWrapper>
    )
}