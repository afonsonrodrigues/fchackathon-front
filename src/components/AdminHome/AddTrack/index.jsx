import { useState } from 'react';
import '../../../styles/utils.css';
import AddTrackModal from '../AddTrackModal';
import { AddTrackCard } from './styled';

export default function AddTrack() {
    const [openModal, setOpenModal] = useState(false);
    const [confirmModal, setConfirmModal] = useState(false);

    return (
        <>
            {openModal && <AddTrackModal setOpenModal={setOpenModal} confirmModal={confirmModal} setConfirmModal={setConfirmModal} />}
            <AddTrackCard className='row space-btw align-center'>
                <div>Adicionar Track</div>
                <button onClick={(e) => setOpenModal(true)}>Add Track</button>
            </AddTrackCard>
        </>
    )
}