import ProgressBanner from "../../components/TrackPage/ProgressBanner";
import DisclaimerCard from "../../components/TrackPage/DisclaimerCard";
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import api from '../../services/api';
import { CustomButton, DiscordText } from './styled';
import { getItem } from "../../utils/storage";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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
            console.log(isUserSigned);

            if (isUserSigned) {
                setUserSigned(true);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleGetUserSignedInfo()
    }, []);

    return (
        <>
            <NavBar />
            <ProgressBanner userSigned={userSigned} setUserSigned={setUserSigned} />
            {!userSigned && <DisclaimerCard />}
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