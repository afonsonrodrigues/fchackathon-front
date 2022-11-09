import { useEffect, useState } from 'react';
import CallToAction from '../../components/HomePage/CallToAction';
import BgBanner from '../../components/HomePage/BgBanner';
import Track from '../../components/HomePage/Track';
import TrackCard from '../../components/HomePage/TrackCard';
import api from '../../services/api';
import '../../styles/utils.css';
import { MainContent, TracksContainer } from './styled';

export default function Home() {
    const [existingTracks, setExistingTracks] = useState([]);
    const [currentTrack, setCurrentTrack] = useState({
        open: false,
        trackId: null,
        trackName: ''
    });

    const getExistingTracks = async () => {
        const { data } = await api.get('/user/all_tracks');

        setExistingTracks(data.tracks);
    }

    useEffect(() => {
        getExistingTracks();
    }, []);

    return (
        <>
            <MainContent>
                <BgBanner />
                <CallToAction />
                <section className='column align-center' id='tracks-list'>
                    <TracksContainer className='row gap-32'>
                        {existingTracks.map((track) => {
                            return <Track
                                key={track.id}
                                trackId={track.id}
                                trackName={track.name}
                                currentTrack={currentTrack}
                                setCurrentTrack={setCurrentTrack}
                            />
                        })}
                    </TracksContainer>
                    {currentTrack.open &&
                        <TrackCard
                            trackId={currentTrack.trackId}
                            trackName={currentTrack.trackName}
                            setCurrentTrack={setCurrentTrack}
                        />
                    }
                </section>
            </MainContent>
        </>
    )
}