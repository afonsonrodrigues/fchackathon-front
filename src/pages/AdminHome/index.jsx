import { useState } from 'react';
import AddContentToTrack from '../../components/AdminHome/AddContentToTrack';
import AddTrack from '../../components/AdminHome/AddTrack';

export default function AdminHome() {
    const [confirmModal, setConfirmModal] = useState(false);

    return (
        <main>
            <AddTrack confirmModal={confirmModal} setConfirmModal={setConfirmModal} />
            <AddContentToTrack confirmModal={confirmModal} setConfirmModal={setConfirmModal} />
        </main>
    )
}