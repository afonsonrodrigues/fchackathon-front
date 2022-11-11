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
        trackContent: []
    });
    const location = useLocation();

    const handleGetUserSignedInfo = async () => {
        const user_id = getItem('id');

        try {
            const track_id = location.state.trackId;

            const { data } = await api.get(`/user/tracks/${user_id}`);
            const isUserSigned = data.find((item) => {
                return item.id === track_id;
            });
            if (!isUserSigned) return

            const { data: trackData } = await api.get(`/user/${track_id}/contents`);

            setTrackInfo({ ...trackInfo, userSigned: true, trackContent: trackData });
        } catch (error) {
            console.log(error);
        }
    }

    const DinamicContentContainer = ({ contentType, trackInfo, setTrackInfo }) => {
        return (
            <>
                {contentType === 'Video' ? <VideoContainer trackInfo={trackInfo} /> : <ArticleContainer trackInfo={trackInfo} setTrackInfo={setTrackInfo} />}
            </>
        )
    }

    useEffect(() => {
        handleGetUserSignedInfo();
    }, []);

    return (
        <>
            <NavBar />
            <ProgressBanner trackInfo={trackInfo} />
            <ContentContainer className="content-container row space-btw">
                {trackInfo?.userSigned ?
                    <>
                        <DinamicContentContainer contentType={trackInfo?.trackContent[trackInfo.current]?.type} trackInfo={trackInfo} setTrackInfo={setTrackInfo} />
                        <ContentListContainer trackInfo={trackInfo} setTrackInfo={setTrackInfo} />
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