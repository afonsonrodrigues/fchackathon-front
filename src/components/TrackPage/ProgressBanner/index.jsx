import { useEffect, useState } from "react";
import "../../../styles/utils.css";
import api from "../../../services/api";
import ClockIcon from "../../../assets/clock-icon.svg";
import {
    BannerContainer,
    StartTrackButton,
    ProgressBarContainer,
} from "./styled";

export default function ProgressBanner() {
    const [userSigned, setUserSigned] = useState(false);

    return (
        <BannerContainer className="row space-btw align-center">
            <div className="row gap-32">
                <img src={TrackIcon} alt="track icon" />
                <div className="column space-btw">
                    <h1>UX/UI Design</h1>
                    <span>Trilha por Orange Juice</span>
                    <div className="row align-center">
                        <img src={ClockIcon} alt="clock icon" />
                        <span>Tempo estimado: 30 horas</span>
                    </div>
                </div>
            </div>
            <ProgressBarContainer className="column justify-end">
                <StartTrackButton>Iniciar tilha</StartTrackButton>
            </ProgressBarContainer>
        </BannerContainer>
    );
}
