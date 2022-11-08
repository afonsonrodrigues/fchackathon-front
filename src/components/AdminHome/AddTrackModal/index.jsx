import { useState } from 'react';
import '../../../styles/utils.css';
import ConfirmModal from "../ConfirmModal";
import { TrackModal } from "./styled";

export default function AddTrackModal({ confirmModal, setConfirmModal, setOpenAddTrackModal, path }) {
    const [addTrackForm, setAddTrackForm] = useState({ name: '', error: '', status: 'Incompleta' });

    const handleChange = (e) => {
        setAddTrackForm({ ...addTrackForm, [e.target.name]: e.target.value });
    }

    return (
        <div>
            {confirmModal && <ConfirmModal addTrackForm={addTrackForm} setAddTrackForm={setAddTrackForm} setConfirmModal={setConfirmModal} setOpenAddTrackModal={setOpenAddTrackModal} path={path} />}
            <div className="modal-bg">
                <TrackModal className="column gap-24">
                    <div className="column">
                        <label htmlFor="">Nome da trilha</label>
                        <input onChange={handleChange} name='name' value={addTrackForm.name} type="text" placeholder="Digite o nome da trilha" />
                        {addTrackForm.error && <span>{addTrackForm.error}</span>}
                    </div>
                    <div className="column">
                        <button onClick={(e) => setConfirmModal(!confirmModal)}>Acicionar Trilha</button>
                        <button onClick={(e) => setOpenAddTrackModal(false)}>Cancelar</button>
                    </div>
                </TrackModal>
            </div>
        </div>
    )
}