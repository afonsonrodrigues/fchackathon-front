import { ConfirmCard } from './styled';
import api from '../../../services/api';
import '../../../styles/utils.css';

export default function ConfirmModal({ setConfirmModal, setOpenModal, form, setForm }) {
    const handleClearStates = async () => {
        try {
            const { error: _, ...formData } = form;

            const response = await api.post('/admin/add_track', formData);

            setConfirmModal(false);
            setOpenModal(false);
            setForm({ name: '', error: '', status: 'Incompleta' });
        } catch (error) {
            setConfirmModal(false);
            setForm({ ...form, error: error.response.data.message });
        }
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