import { useState } from 'react';
import AddContentToTrack from '../../components/AdminHome/AddContentToTrack';
import AddTrack from '../../components/AdminHome/AddTrack';
import { useEffect } from 'react';

export default function AdminHome() {
    const [confirmModal, setConfirmModal] = useState(false);

    useEffect(() => {
        const canControlScrollRestoration = 'scrollRestoration' in window.history
        if (canControlScrollRestoration) {
            window.history.scrollRestoration = 'manual';
        }

        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <AddTrack confirmModal={confirmModal} setConfirmModal={setConfirmModal} />
            <AddContentToTrack confirmModal={confirmModal} setConfirmModal={setConfirmModal} />
        </main>
    )
}