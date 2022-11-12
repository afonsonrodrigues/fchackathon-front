import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import ContentListContainer from "../../components/TrackPage/ContentListContainer";
import DisclaimerCard from "../../components/TrackPage/DisclaimerCard";
import ProgressBanner from "../../components/TrackPage/ProgressBanner";
import VideoContainer from "../../components/TrackPage/VideoContainer";
import ArticleContainer from "../../components/TrackPage/ArticleContainer";
import api from '../../services/api';
import { getItem } from "../../utils/storage";
import { ContentContainer, CustomButton, DiscordText } from './styled';

export default function Track() {
    const [trackInfo, setTrackInfo] = useState({
        current: 0,
        userSigned: null,
        trackContent: [],
        total: null,
        progress: null
    });
    const location = useLocation();

    const handleGetUserSignedInfo = async () => {
        try {
            const user_id = Number(getItem('id'));
            const track_id = Number(location.state.trackId);
            const userTracks = [...location.state.userTracks]

            const isUserSigned = userTracks?.find((item) => {
                return item.id === track_id;
            });
            if (!isUserSigned) return

            const { data: trackData } = await api.get(`/user/${track_id}/contents`);

            const { data: userProgress } = await api.get(`/user/${user_id}/${track_id}/progress`, { user_id });

            const orderASCTrackData = trackData?.sort((a, b) => {
                return a.id > b.id ? 1 : -1;
            });
            const orderASCUserProgress = userProgress?.sort((a, b) => {
                return a.content_id > b.content_id ? 1 : -1;
            });

            const withCompletion = [...orderASCTrackData];
            withCompletion?.map((item, index) => {
                return item.complete = orderASCUserProgress[index].complete
            });

            setTrackInfo({ ...trackInfo, userSigned: true, trackContent: withCompletion });
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
            <ProgressBanner trackInfo={trackInfo} />
            <ContentContainer className="content-container row space-btw">
                {trackInfo?.userSigned ?
                    <>
                        <DynamicContentContainer contentType={trackInfo?.trackContent[trackInfo?.current]?.type} trackInfo={trackInfo} setTrackInfo={setTrackInfo} />
                        <ContentListContainer handleGetUserSignedInfo={handleGetUserSignedInfo} trackInfo={trackInfo} setTrackInfo={setTrackInfo} />
                    </>
                    :
                    <DisclaimerCard trackInfo={trackInfo} setTrackInfo={setTrackInfo} handleGetUserSignedInfo={handleGetUserSignedInfo} />
                }
            </ContentContainer>
            <div className="column align-center">
                <DiscordText>
                    Ficou com dúvidas? Entra lá na comunidade do Discord que a gente te ajuda!
                </DiscordText>
                <a href="">
                    <CustomButton className="primary-button">
                        Discord
                    </CustomButton>
                </a>
            </div>
            <Footer />
        </>
    )
}