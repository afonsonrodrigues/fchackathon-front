import ArrowDownIcon from "../../../assets/blue-arrow-down.svg";
import { HashLink } from "react-router-hash-link";
import UXIcon from "../../../assets/blue-ux.svg";
import DevIcon from "../../../assets/blue-dev.svg";
import QAIcon from "../../../assets/blue-qa.svg";
import "../../../styles/utils.css";
import { ArrowDown, TrackWrapper, TrackName } from "./styled";

export default function Track({
    trackName,
    trackId,
    currentTrack,
    setCurrentTrack,
}) {
    const handleSetCurrentTrack = () => {
        return setCurrentTrack({ open: true, trackName, trackId });
    };

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -120;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
    };

    return (
        <div>
            <HashLink className='w-[344px] h-[263px]' smooth='true' timeout={1000} scroll={el => scrollWithOffset(el)} to='/home#track-card'>
                <TrackWrapper onClick={handleSetCurrentTrack} className='w-[358px] h-[278px] sm:w-[344px] sm:h-[263px] lg:w-[384px] lg:h-[278px] pt-14 pb-8  flex flex-col items-center justify-between xl:w-[405px]'>
                    {trackName === 'Desenvolvimento FullStack' && <img className='w-[88px]' src={DevIcon} alt="track icon" />}
                    {trackName === 'Analista QA' && <img className='w-[88px]' src={QAIcon} alt="track icon" />}
                    {trackName === 'UX/UI Design' && <img className='w-[88px]' src={UXIcon} alt="track icon" />}
                    <TrackName>{trackName}</TrackName>
                    <ArrowDown
                        src={ArrowDownIcon}
                        alt="arrow down to open card"
                    />
                </TrackWrapper>
            </HashLink>
        </div>
    );
}
