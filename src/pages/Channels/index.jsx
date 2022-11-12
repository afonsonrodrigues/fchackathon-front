import "./styled";
import { MainContent, Linha } from "./styled";
import BgBanner from "../../components/Channels/BgBanner";
import LogoOrange from "../../components/Channels/LogoOrange";
import Description from "../../components/Channels/Description";
import Midia from "../../components/Channels/Midia";
import Newsletter from "../../components/Channels/Newsletter";

export default function Channels() {
    return (
        <MainContent className="column align-center">
            <BgBanner />
            <LogoOrange />
            <Description />
            <Linha />
            <Midia />
            <Newsletter />
        </MainContent>
    );
}
