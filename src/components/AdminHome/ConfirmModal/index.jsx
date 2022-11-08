import { ConfirmCard } from './styled';
import api from '../../../services/api';
import '../../../styles/utils.css';

export default function ConfirmModal({ setConfirmModal, setOpenAddTrackModal, setOpenAddContentModal, addContentForm, setAddContentForm, addTrackForm, setAddTrackForm, path }) {

    const handleClose = () => {
        setConfirmModal(false)
    }

    console.log(path);
    const handleRequest = async () => {
        try {
            if (path === '/add_track') {
                const { error: _, ...formData } = addTrackForm;
                const response = await api.post('/admin/add_track', formData);

                setConfirmModal(false);
                setOpenAddTrackModal(false);
                setAddTrackForm({ name: '', error: '', status: 'Incompleta' });
            }
            if (path === '/add_content') {
                const { error: _, ...formData } = addContentForm;
                const response = await api.post('/admin/add_content', formData);

                console.log(response);
                setConfirmModal(false);
                setOpenAddContentModal(false);
                setAddContentForm({
                    name: '',
                    type: '',
                    duration: '',
                    complete: '',
                    url: '',
                    description: '',
                    url_image: '',
                    error: ''
                });
            }
        } catch (error) {
            console.log(error);
            if (path === '/add_track') {
                setConfirmModal(false);
                setAddTrackForm({ ...addTrackForm, error: error.response.data.message });
            }
            if (path === '/add_content') {
                setConfirmModal(false);
                setAddContentForm({ ...addContentForm, error: error.response.data.message });
            }
        }
    }

    return (
        <div className='modal-bg-stage2'>
            <ConfirmCard className='row'>
                <button onClick={handleClose}>Não</button>
                <button onClick={handleRequest}>Sim</button>
            </ConfirmCard>
        </div>
    )
}