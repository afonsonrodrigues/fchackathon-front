import '../../../styles/utils.css';
import ConfirmModal from "../ConfirmModal";
import { TrackModal } from "./styled";

export default function AddTrackModal({ confirmModal, setConfirmModal, setOpenModal }) {

    return (
        <div>
            {confirmModal && <ConfirmModal setConfirmModal={setConfirmModal} setOpenModal={setOpenModal} />}
            <div className="modal-bg">
                <TrackModal className="column gap-24">
                    <div className="column">
                        <label htmlFor="">Nome da trilha</label>
                        <input type="text" placeholder="Digite o nome da trilha" />
                    </div>
                    <div className="column">
                        <button onClick={(e) => setConfirmModal(!confirmModal)}>Acicionar Trilha</button>
                        <button onClick={(e) => setOpenModal(false)}>Cancelar</button>
                    </div>
                </TrackModal>
            </div>
        </div>
    )
}