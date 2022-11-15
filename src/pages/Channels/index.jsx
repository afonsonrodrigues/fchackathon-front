import { useEffect } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import OrangeJuiceLogo from '../../assets/orangejuice.svg';
import { MainContent, PageTitle, BannerContainer, SplitLine, MediaLogo } from "./styled";
import MediaInfo from '../../assets/MidiaInfo.json';
import YoutubeLogo from '../../assets/logoyoutube.png';
import MediumLogo from '../../assets/logomedium.png';
import DiscordLogo from '../../assets/logodiscord.png';
import SpotifyLogo from '../../assets/logospotify.png';
import HubLogo from '../../assets/logoorangehub.png';
import Newsletter from "../../components/Newsletter";

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
        <>
            <NavBar rgb='235, 92, 11' />
            <MainContent className="flex flex-col items-center justify-between sm:items-start xl:justify-center">
                <BannerContainer className="w-full h-[380px] lg:h-[477px] flex flex-col items-center">
                    <div className="flex flex-col items-center lg:w-[905px] lg:flex-row lg:items-center lg:justify-between mt-[136px] lg:mt-[182px]">
                        <PageTitle className="text-white text-[40px] lg:text-7xl">Ecossistema</PageTitle>
                        <img className="w-[158px] h-[116px] lg:w-[232px] lg:h-[183px]" src={OrangeJuiceLogo} alt="company logo" />
                    </div>
                </BannerContainer>
                <div className="flex flex-col text-base items-center sm:items-start pt-4 pb-8 px-4 sm:px-8 mb-10 xl:w-[1280px] xl:mx-auto xl:my-0">
                    <div className="lg:flex lg:flex-row lg:gap-[44px] lg:justify-center xl:w-[1280px] xl:justify-start xl:pl-[102px]">
                        <h2 className="text-start sm:text-start font-bold text-2xl mb-4">Suco de laranja? <br /> O que é isso?</h2>
                        <div className="flex flex-col sm:w-[523px] sm:gap-4">
                            <p>
                                {MediaInfo.whatsOrange1}
                            </p>
                            <p>
                                {MediaInfo.whatsOrange2}
                            </p>
                        </div>
                    </div>
                </div>
                <SplitLine className="w-[95%] mx-auto my-0 max-w-[1280px]" />
                <div className="flex flex-col gap-[80px] w-full lg:justify-center">
                    <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
                        <MediaLogo src={YoutubeLogo} alt="youtube logo" />
                        <div className="flex flex-col items-center sm:items-start ">
                            <h3 className="mb-6 text-lg font-bold">{MediaInfo.tittleYoutube}</h3>
                            <p className="w-[358px] mb-8 text-start">{MediaInfo.youtube}</p>
                            <a className="text-lg font-bold text underline" href={MediaInfo.linkYoutube}>{MediaInfo.acessYoutube}</a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-8 sm:flex-row-reverse sm:justify-center">
                        <MediaLogo src={DiscordLogo} alt="youtube logo" />
                        <div className="flex flex-col items-center sm:items-start">
                            <h3 className="mb-6 text-lg font-bold">{MediaInfo.tittleDiscord}</h3>
                            <p className="w-[358px] mb-8 text-start">{MediaInfo.discord}</p>
                            <a className="text-lg font-bold text underline" href={MediaInfo.linkDiscord}>{MediaInfo.acessDiscord}</a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
                        <MediaLogo src={MediumLogo} alt="youtube logo" />
                        <div className="flex flex-col items-center sm:items-start">
                            <h3 className="mb-6 text-lg font-bold">{MediaInfo.tittleMedium}</h3>
                            <p className="w-[358px] mb-8 text-start">{MediaInfo.medium}</p>
                            <a className="text-lg font-bold text underline" href={MediaInfo.linkMedium}>{MediaInfo.acessMedium}</a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-8 sm:flex-row-reverse sm:justify-center">
                        <MediaLogo src={SpotifyLogo} alt="youtube logo" />
                        <div className="flex flex-col items-center sm:items-start">
                            <h3 className="mb-6 text-lg font-bold">{MediaInfo.tittleSpotify}</h3>
                            <p className="w-[358px] mb-8 text-start">{MediaInfo.spotify}</p>
                            <a className="text-lg font-bold text underline" href={MediaInfo.linkSpotify}>{MediaInfo.acessSpotify}</a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
                        <MediaLogo src={HubLogo} alt="youtube logo" />
                        <div className="flex flex-col items-center sm:items-start">
                            <h3 className="mb-6 text-lg font-bold">{MediaInfo.tittleOrangeHub}</h3>
                            <p className="w-[358px] mb-8 text-start">{MediaInfo.orangeHub}</p>
                            <a className="text-lg font-bold text underline" href={MediaInfo.linkOrangeHub}>{MediaInfo.acessOrangeHub}</a>
                        </div>
                    </div>
                    <Newsletter />
                </div>
                <SplitLine />
            </MainContent>
            <Footer />
        </>
    );
}
