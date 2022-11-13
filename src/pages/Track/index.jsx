import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import ArticleContainer from "../../components/TrackPage/ArticleContainer";
import ContentListContainer from "../../components/TrackPage/ContentListContainer";
import DisclaimerCard from "../../components/TrackPage/DisclaimerCard";
import ProgressBanner from "../../components/TrackPage/ProgressBanner";
import VideoContainer from "../../components/TrackPage/VideoContainer";
import api from '../../services/api';
import { getItem } from "../../utils/storage";
import { ContentContainer, CustomButton, DiscordText } from './styled';

export default function Track() {
    const location = useLocation();
    const userSignedTracks = location?.state?.userSignedTracks;
    const user_id = Number(getItem('id'));
    const track_id = Number(location?.state?.trackId);
    const trackName = location?.state?.trackName;
    const [trackInfo, setTrackInfo] = useState({
        current: 0,
        userSigned: null,
        trackContent: [],
        totalProgress: null,
        currentProgress: null
    });

    const handleGetUserSignedInfo = async () => {
        try {
            const isUserSigned = userSignedTracks.signedTracks?.find((item) => {
                return item.id === track_id;
            });
            if (!isUserSigned) return;

            const { data: trackData } = await api.get(`/track/${track_id}/contents`);

            const { data: getUserProgress } = await api.get(`/user/${user_id}/${track_id}/progress`, { user_id });
            const filterCompleteds = getUserProgress.filter((item) => {
                return item.complete === true;
            });

            const orderASCTrackData = trackData?.sort((a, b) => {
                return a.id > b.id ? 1 : -1;
            });
            const orderASCUserProgress = getUserProgress?.sort((a, b) => {
                return a.content_id > b.content_id ? 1 : -1;
            });

            const withCompletion = [...orderASCTrackData];
            withCompletion?.map((item, index) => {
                return item.complete = orderASCUserProgress[index].complete
            });

            setTrackInfo({ ...trackInfo, userSigned: true, trackContent: withCompletion, totalProgress: trackData.length, currentProgress: filterCompleteds.length });
        } catch (error) {
            console.log(error);
        }
    }

    const DynamicContentContainer = ({ contentType, trackInfo, setTrackInfo }) => {
        return (
            <>
                {contentType === 'Video' ? <VideoContainer trackInfo={trackInfo} /> : <ArticleContainer trackInfo={trackInfo} setTrackInfo={setTrackInfo} />}
            </>
        )
    }

    useEffect(() => {
        handleGetUserSignedInfo();
        const canControlScrollRestoration = 'scrollRestoration' in window.history
        if (canControlScrollRestoration) {
            window.history.scrollRestoration = 'manual';
        }

        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <NavBar />
            <ProgressBanner trackInfo={trackInfo} trackName={trackName} />
            <ContentContainer className="flex flex-col px-4 mt-6 items-center gap-8  lg:flex-row lg:items-start lg:justify-between xl:pt-6 xl:my-0 xl:mx-auto xl:w-[1280px]">
                {trackInfo?.userSigned ?
                    <>
                        <DynamicContentContainer contentType={trackInfo?.trackContent[trackInfo?.current]?.type} trackInfo={trackInfo} setTrackInfo={setTrackInfo} />
                        <ContentListContainer handleGetUserSignedInfo={handleGetUserSignedInfo} trackInfo={trackInfo} setTrackInfo={setTrackInfo} />
                    </>
                    :
                    <DisclaimerCard trackInfo={trackInfo} setTrackInfo={setTrackInfo} handleGetUserSignedInfo={handleGetUserSignedInfo} />
                }
            </ContentContainer>
            <div className="flex flex-col items-center px-8 gap-4 my-[120px]">
                <DiscordText className="text-center text-xl flex flex-col ">
                    <strong>Ficou com dúvidas?</strong> Entra lá na comunidade do Discord que a gente te ajuda!
                </DiscordText>
                <a href="https://discord.gg/orangejuicetech" target='_blank'>
                    <CustomButton className="primary-button w-[139px] h-[52px]">
                        Discord
                    </CustomButton>
                </a>
            </div>
            <Footer />
        </>
    )
}