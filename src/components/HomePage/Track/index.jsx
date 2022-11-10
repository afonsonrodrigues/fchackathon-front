import ArrowDownIcon from '../../../assets/blue-arrow-down.svg';
import { HashLink } from 'react-router-hash-link';
import UXIcon from '../../../assets/ux-track.svg';
import DevIcon from '../../../assets/dev-track.svg';
import QAIcon from '../../../assets/qa-track.svg';
import '../../../styles/utils.css';
import { ArrowDown, TrackWrapper, TrackName } from './styled';

export default function Track({ trackName, trackId, currentTrack, setCurrentTrack }) {
    const handleSetCurrentTrack = () => {
        return setCurrentTrack({ open: true, trackName, trackId });
    }

    return (
        <div className='column'>
            <HashLink smooth='true' timeout='15' to='/home#track-card'>
                <TrackWrapper onClick={handleSetCurrentTrack} className='column align-center space-btw'>
                    {trackName === 'Desenvolvimento FullStack' && <img src={DevIcon} alt="track icon" />}
                    {trackName === 'Analista QA' && <img src={QAIcon} alt="track icon" />}
                    {trackName === 'UX/UI Design' && <img src={UXIcon} alt="track icon" />}
                    <TrackName>{trackName}</TrackName>
                    <ArrowDown src={ArrowDownIcon} alt="arrow down to open card" />
                </TrackWrapper>
            </HashLink>
        </div>
    )
}