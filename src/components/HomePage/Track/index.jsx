import ArrowDownIcon from '../../../assets/blue-arrow-down.svg';
import { HashLink } from 'react-router-hash-link';
import UXIcon from '../../../assets/blue-ux.svg';
import DevIcon from '../../../assets/blue-dev.svg';
import QAIcon from '../../../assets/blue-qa.svg';
import '../../../styles/utils.css';
import { ArrowDown, TrackWrapper, TrackName } from './styled';

export default function Track({ trackName, trackId, currentTrack, setCurrentTrack }) {
    const handleSetCurrentTrack = () => {
        return setCurrentTrack({ open: true, trackName, trackId });
    }

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -120; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    return (
        <div className='flex'>
            <HashLink smooth='true' timeout={1000} scroll={el => scrollWithOffset(el)} to='/home#track-card'>
                <TrackWrapper onClick={handleSetCurrentTrack} className='flex flex-col'>
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