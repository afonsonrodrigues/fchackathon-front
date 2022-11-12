import "./styled";
import { MainContent } from "./styled";
import { useEffect } from "react";
import BgBanner from "../../components/Channels/BgBanner";
import LogoOrange from "../../components/Channels/LogoOrange";

export default function Channels() {

    useEffect(() => {
        const canControlScrollRestoration = 'scrollRestoration' in window.history
        if (canControlScrollRestoration) {
            window.history.scrollRestoration = 'manual';
        }

        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <MainContent>
                <BgBanner />
                <LogoOrange />
            </MainContent>
        </>
    );
}
