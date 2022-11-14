import "./styled";
import { MainContent, Linha } from "./styled";
import { useEffect } from "react";
import BgBanner from "../../components/Channels/BgBanner";
import LogoOrange from "../../components/Channels/LogoOrange";
import Description from "../../components/Channels/Description";
import Midia from "../../components/Channels/Midia";
import Newsletter from "../../components/Channels/Newsletter";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

export default function Channels() {
    useEffect(() => {
        const canControlScrollRestoration =
            "scrollRestoration" in window.history;
        if (canControlScrollRestoration) {
            window.history.scrollRestoration = "manual";
        }

        window.scrollTo(0, 0);
    }, []);

    return (
        <MainContent className="column align-center">
            <NavBar rgb={"235, 92, 11"} color={"--orange"} />
            <BgBanner />
            <LogoOrange />
            <Description />
            <Linha />
            <Midia />
            <Newsletter />
            <Footer />
        </MainContent>
    );
}
