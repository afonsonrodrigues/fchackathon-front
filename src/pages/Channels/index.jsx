import "./styled";
import { MainContent } from "./styled";
import BgBanner from "../../components/Channels/BgBanner";
import LogoOrange from "../../components/Channels/LogoOrange";

export default function Channels() {
    return (
        <>
            <MainContent>
                <BgBanner />
                <LogoOrange />
            </MainContent>
        </>
    );
}
