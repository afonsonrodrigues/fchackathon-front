import { useEffect, useState } from 'react';
import CallToAction from '../../components/HomePage/CallToAction';
import Track from '../../components/HomePage/Track';
import NavBar from '../../components/NavBar';
import api from '../../services/api';
import { MainContent } from './styled';
import '../../styles/utils.css';

export default function Home() {
    const [existingTracks, setExistingTracks] = useState([]);

    const getExistingTracks = async () => {
        const { data } = await api.get('/tracks');

        setExistingTracks(data.tracks);
    }

    useEffect(() => {
        getExistingTracks();
    }, []);

    return (
        <>
            <NavBar />
            <MainContent>
                <CallToAction />
                <section className='column'>
                    <div>Conheça as trilhas</div>
                    <div className='row gap-32'>
                        {existingTracks.map((track) => {
                            return <Track
                                key={track.id}
                                trackId={track.id}
                                trackName={track.name}
                            />
                        })}
                    </div>
                </section>
            </MainContent>
        </>
    )
}