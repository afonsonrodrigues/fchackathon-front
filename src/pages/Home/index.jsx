import { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import BgBanner from '../../components/HomePage/BgBanner';
import CallToAction from '../../components/HomePage/CallToAction';
import Track from '../../components/HomePage/Track';
import TrackCard from '../../components/HomePage/TrackCard';
import UserTracks from '../../components/HomePage/UserTracks';
import NavBar from '../../components/NavBar';
import SpotifyBanner from '../../components/SpotifyBanner';
import api from '../../services/api';
import '../../styles/utils.css';
import { getItem } from '../../utils/storage';
import { Container, SectionTitle, TracksContainer, UserTracksContainer } from './styled';

export default function Home() {
    const [existingTracks, setExistingTracks] = useState([]);
    const [userSignedTracks, setUserSignedTracks] = useState({
        signedTracks: null,
        tracksContents: null,
        completion: null,
        current: null
    });
    const [currentTrack, setCurrentTrack] = useState({
        open: false,
        trackId: null,
        trackName: "",
    });

    const getExistingTracks = async () => {
        const id = Number(getItem('id'));

        const { data: allTracks } = await api.get("/user/all_tracks");
        setExistingTracks(allTracks?.tracks);

        const { data: userTracks } = await api.get(`/user/tracks/${id}`);
        const { data: userContents } = await api.get(`/user/${id}/contents`);

        const totalObj = {};
        userTracks.map((track) => {
            const filterContents = userContents.filter((item) => {
                return item.track_id === track.track_id;
            });
            totalObj[track.track_id] = filterContents;

            return totalObj;
        });

        const progressObj = {};
        userTracks.map((track) => {
            const filterContents = userContents.filter((item) => {
                return item.track_id === track.track_id && item.complete;
            });
            progressObj[track.track_id] = filterContents;

            return { ...progressObj };
        });

        setUserSignedTracks({ ...userSignedTracks, tracksContents: userContents, signedTracks: userTracks, completion: totalObj, current: progressObj });
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
        <Container>
            <BgBanner />
            <NavBar />
            <main className='flex flex-col items-center'>
                <CallToAction />
                <UserTracksContainer className='w-full flex flex-col border-b-0 items-center gap-4 px-4'>
                    <SectionTitle className='font-bold text-xl mb-4'>
                        Minhas trilhas
                    </SectionTitle>
                    <div className='mb-8 gap-8 sm:flex sm:flex-wrap'>
                        {userSignedTracks?.signedTracks?.map((track) => {
                            const totalProgress = userSignedTracks.completion[track.track_id].filter((item) => {
                                return item;
                            });
                            const userProgress = userSignedTracks.completion[track.track_id].filter((item) => {
                                return item.complete;
                            });
                            return <UserTracks key={track.id} trackName={track.name} trackId={track.id} userSignedTracks={userSignedTracks} progressNumbers={{ currentProgress: userProgress.length, totalProgress: totalProgress.length }} />
                        })}
                    </div>
                </UserTracksContainer>
                <section className="flex flex-col items-center" id="tracks-list">
                    <TracksContainer className="flex-col gap-1">
                        {existingTracks?.map((track) => {
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
                            userSignedTracks={userSignedTracks}
                            setUserSignedTracks={setUserSignedTracks}
                            trackId={currentTrack.trackId}
                            trackName={currentTrack.trackName}
                            setCurrentTrack={setCurrentTrack}
                        />
                    )}
                </section>
                <SpotifyBanner />
            </main>
            <Footer />
        </Container>
    );
}
