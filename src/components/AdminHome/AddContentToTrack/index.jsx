import { AddContent } from './styled';
import AddContentToTrackModal from '../AddContentToTrackModal';
import { useState } from 'react';

export default function AddContentToTrack({ confirmModal, setConfirmModal, path }) {
    const [openAddContentModal, setOpenAddContentModal] = useState(false);

    return (
        <>
            {openAddContentModal && <AddContentToTrackModal confirmModal={confirmModal} setConfirmModal={setConfirmModal} path={path} setOpenAddContentModal={setOpenAddContentModal} />}
            <AddContent className='bg-orange-300 flex flex-col items-center justify-center'>
                <div>Adicionar Content to Track</div>
                <button onClick={(e) => setOpenAddContentModal(!openAddContentModal)}>Add Content</button>
            </AddContent>
        </>
    )
}