import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ArrowDown from "../../../assets/blue-arrow-down.svg";
import BlueClock from "../../../assets/blue-clock.svg";
import "../../../styles/utils.css";
import tracksInfo from "../../../utils/tracksInfo";
import {
    AccessTrackButton,
    ActionContainer,
    ArrowUpImage,
    CardContainer,
    ClockImage,
    ExpectedTime,
    TrackResume,
    TrackSubtitle,
    TrackTitle,
} from "./styled";

export default function TrackCard({
    trackName,
    trackId,
    setCurrentTrack,
    userSignedTracks,
    teste,
    setTeste,
}) {
    const [trackInfo, setTrackInfo] = useState({ ...tracksInfo[trackId] });
    const navigate = useNavigate();

    const handleCloseCard = () => {
        setCurrentTrack({
            open: false,
            trackId: null,
            trackName: "",
        });
    };

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -120;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
    };

    useEffect(() => {
        setTrackInfo({ ...tracksInfo[trackId] });
    }, [trackName, trackId]);

    return (
        <CardContainer
            className="flex flex-col items-center justify-between w-[358px] h-[518px] px-4 py-8 mb-8 sm:items-start sm:w-[703px] sm:h-[451px] sm:px-14 sm:py-10"
            id="track-card"
        >
            <HashLink
                smooth="true"
                timeout={1000}
                scroll={(el) => scrollWithOffset(el)}
                to="/home#tracks-list"
            >
                <ArrowUpImage
                    onClick={handleCloseCard}
                    src={ArrowDown}
                    alt="arrow up to close card"
                />
            </HashLink>
            <ActionContainer className="flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col mb-6">
                    <TrackTitle className="text-2xl font-bold sm:mb-6 lg:text-[32px]">
                        {trackName}
                    </TrackTitle>
                    <TrackSubtitle className="text-lg font-medium sm:mb-4">
                        {trackInfo.one}
                    </TrackSubtitle>
                    <TrackResume className="">{trackInfo.two}</TrackResume>
                </div>
                <div>
                    <div className="flex items-center gap-4">
                        <ClockImage src={BlueClock} alt="clock icon" />
                        <ExpectedTime>{`Tempo estimado: ${trackId} horas`}</ExpectedTime>
                    </div>
                </div>
            </ActionContainer>
            <AccessTrackButton
                onClick={(e) =>
                    navigate(`/track/${trackId}`, {
                        state: { trackName, trackId, userSignedTracks },
                    })
                }
                className="call-button w-[235px] h-[52px]"
            >
                Acesse essa trilha
            </AccessTrackButton>
        </CardContainer>
    );
}
