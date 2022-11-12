import { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import BgBanner from '../../components/HomePage/BgBanner';
import CallToAction from '../../components/HomePage/CallToAction';
import Track from '../../components/HomePage/Track';
import TrackCard from '../../components/HomePage/TrackCard';
import NavBar from '../../components/NavBar';
import SpotifyBanner from '../../components/SpotifyBanner';
import api from '../../services/api';
import { getItem } from '../../utils/storage';
import '../../styles/utils.css';
import { MainContent, TracksContainer } from './styled';

export default function Home() {
    const [existingTracks, setExistingTracks] = useState([]);
    const [userTracks, setUserTracks] = useState({

    });
    const [currentTrack, setCurrentTrack] = useState({
        open: false,
        trackId: null,
        trackName: "",
    });

    const getExistingTracks = async () => {
        const user_id = getItem('id');

        try {
            const { data: userTracks } = await api.get(`/user/tracks/${user_id}`);
            setUserTracks(userTracks);

            const { data: existingTracks } = await api.get("/user/all_tracks");
            setExistingTracks(existingTracks.tracks);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getExistingTracks();
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
                <NavBar />
                <CallToAction />
                <section className="column align-center" id="tracks-list">
                    <TracksContainer className="row gap-32">
                        {existingTracks.map((track) => {
                            return (
                                <Track
                                    key={track.id}
                                    trackId={track.id}
                                    trackName={track.name}
                                    currentTrack={currentTrack}
                                    setCurrentTrack={setCurrentTrack}
                                />
                            );
                        })}
                    </TracksContainer>
                    {currentTrack.open && (
                        <TrackCard
                            userTracks={userTracks}
                            setUserTracks={setUserTracks}
                            trackId={currentTrack.trackId}
                            trackName={currentTrack.trackName}
                            setCurrentTrack={setCurrentTrack}
                        />
                    )}
                </section>
            </MainContent>
            <SpotifyBanner />
            <Footer />
        </>
    );
}
