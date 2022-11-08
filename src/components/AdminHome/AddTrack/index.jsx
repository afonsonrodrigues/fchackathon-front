import { useState } from 'react';
import '../../../styles/utils.css';
import AddTrackModal from '../AddTrackModal';
import { AddTrackCard } from './styled';

export default function AddTrack({ confirmModal, setConfirmModal, path }) {
    const [openAddTrackModal, setOpenAddTrackModal] = useState(false);
    
    return (
        <>
            {openAddTrackModal && <AddTrackModal openAddTrackModal={openAddTrackModal} setOpenAddTrackModal={setOpenAddTrackModal} confirmModal={confirmModal} setConfirmModal={setConfirmModal} path={path} />}
            <AddTrackCard className='row space-btw align-center'>
                <div>Adicionar Track</div>
                <button onClick={(e) => setOpenAddTrackModal(true)}>Add Track</button>
            </AddTrackCard>
        </>
    )
}