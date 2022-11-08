import { ConfirmCard } from './styled';
import '../../../styles/utils.css';

export default function ConfirmModal({ setConfirmModal, setOpenModal }) {
    const handleClearStates = () => {
        setConfirmModal(false);
        setOpenModal(false);
    }

    return (
        <div className='modal-bg-stage2'>
            <ConfirmCard className='row'>
                <button onClick={(e) => setConfirmModal(false)}>Não</button>
                <button onClick={handleClearStates}>Sim</button>
            </ConfirmCard>
        </div>
    )
}