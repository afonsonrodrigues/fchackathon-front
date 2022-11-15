import { useEffect, useState } from 'react';
import '../../../styles/utils.css';
import ConfirmModal from "../ConfirmModal";
import { TrackModal } from "./styled";

export default function AddTrackModal({ confirmModal, setConfirmModal, setOpenAddTrackModal, handleGetAllTracksNContent, path }) {
    const [addTrackForm, setAddTrackForm] = useState({ name: '', error: '' });

    const handleChange = (e) => {
        setAddTrackForm({ ...addTrackForm, [e.target.name]: e.target.value });
    }

    const handleTeste = (e) => {
        console.log(addTrackForm);
        setConfirmModal(!confirmModal)
    }

    return (
        <div>
            {confirmModal &&
                <ConfirmModal
                    addTrackForm={addTrackForm}
                    setAddTrackForm={setAddTrackForm}
                    setConfirmModal={setConfirmModal}
                    setOpenAddTrackModal={setOpenAddTrackModal}
                    path={'/add_track'}
                    handleGetAllTracksNContent={handleGetAllTracksNContent}
                />
            }
            <div className="modal-bg">
                <TrackModal className="flex flex-col items-center justify-center w-[600px] h-[400px]">
                    <div className="flex flex-col mb-12">
                        <label htmlFor="">Nome da trilha</label>
                        <input className='w-96 h-12 px-4' onChange={handleChange} name='name' value={addTrackForm.name} type="text" placeholder="Digite o nome da trilha" />
                        {addTrackForm.error && <span>{addTrackForm.error}</span>}
                    </div>
                    <div className="flex justify-center gap-16 w-[600px]">
                        <button onClick={(e) => setOpenAddTrackModal(false)}>Cancelar</button>
                        <button onClick={handleTeste}>Adicionar Trilha</button>
                    </div>
                </TrackModal>
            </div>
        </div>
    )
}