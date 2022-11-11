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
    const [userSigned, setUserSigned] = useState(false);
    const location = useLocation();

    const handleGetUserSignedInfo = async () => {
        const user_id = getItem('id');

        try {
            const { data } = await api.get(`/user/tracks/${user_id}`);
            const [isUserSigned] = data.map((item) => {
                return item.id === Number(location.pathname.split('/')[2]);
            });

            if (isUserSigned) {
                setUserSigned(true);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleTrackContent = async () => {
        const track_id = location.state.trackId;

        try {
            const { data } = await api.get(`/user/${track_id}/contents`);
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleGetUserSignedInfo();
        handleTrackContent();
    }, []);

    return (
        <>
            <NavBar />
            <ProgressBanner userSigned={userSigned} setUserSigned={setUserSigned} />
            <ContentContainer className="content-container row space-btw">
                {/* {userSigned ? <><VideoContainer /><ContentListContainer /></> : <DisclaimerCard />} */}
                {userSigned ? <><ArticleContainer /><ContentListContainer /></> : <DisclaimerCard />}
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