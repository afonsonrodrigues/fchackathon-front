import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DevTrackIcon from "../../../assets/blue-dev.svg";
import QATrackIcon from "../../../assets/blue-qa.svg";
import UXTrackIcon from "../../../assets/blue-ux.svg";
import DotsMenu from "../../../assets/dots-menu.svg";
import "../../../styles/utils.css";
import ProgressBar from "../../ProgressBar";
import {
    DotsMenuImage,
    StartDate,
    TrackImage,
    TrackTitle,
    TrackWrapper,
    DelButton,
} from "./styled";

export default function UserTracks({ trackName, progressNumbers }) {
    const [trackStyle, setTrackStyle] = useState({
        icon: "",
        bgColor: "",
    });

    const handleIconPath = (trackName) => {
        if (trackName === "Desenvolvimento FullStack") {
            return setTrackStyle({
                ...trackStyle,
                icon: DevTrackIcon,
                bgColor: "var(--primary-color-800)",
            });
        }
        if (trackName === "Analista QA") {
            return setTrackStyle({
                ...trackStyle,
                icon: QATrackIcon,
                bgColor: "var(--secondary-color-400)",
            });
        }
        if (trackName === "UX/UI Design") {
            return setTrackStyle({
                ...trackStyle,
                icon: UXTrackIcon,
                bgColor: "var(--secondary-color-800)",
            });
        }
    };

    useEffect(() => {
        handleIconPath(trackName);
    }, []);

    return (
        <TrackWrapper className="w-[358px] h-[460px] sm:w-[703px] sm:h-[203px] sm: lg:w-[1008px] lg:h-[203px] mb-4 flex justify-center flex-col sm:flex-wrap lg:flex-wrap items-center">
            <div
                className="flex flex-col items-center"
                style={{ width: "27%" }}
            >
                <TrackImage className="w-[72px] mb-6" src={trackStyle.icon} />
                <TrackTitle className="mb-2 font-bold text-base">
                    {trackName}
                </TrackTitle>
            </div>
            <div className="flex flex-col ">
                <div>Inicio: 05/11/22</div>
                <text>Tempo estimado: 30 horas</text>
                <text>Tempo dedicado: 05:00 horas</text>
                <ProgressBar
                    trackStyle={trackStyle}
                    progressNumbers={progressNumbers}
                />
            </div>
            <DelButton className="flex flex-col items-center mb-20 lg:ml-20">
                Excluir trilha
            </DelButton>
        </TrackWrapper>
    );
}
