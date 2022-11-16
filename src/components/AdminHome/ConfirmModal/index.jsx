
import { ConfirmCard } from './styled';
import api from '../../../services/api';
import '../../../styles/utils.css';

export default function ConfirmModal({ setConfirmModal, setOpenAddTrackModal, setOpenAddContentModal, addContentForm, setAddContentForm, addTrackForm, setAddTrackForm, path, handleGetAllTracksNContent, editTrackModal, setEditTrackModal, editContentForm, setEditContentForm }) {


export default function ConfirmModal({
    setConfirmModal,
    setOpenAddTrackModal,
    setOpenAddContentModal,
    addContentForm,
    setAddContentForm,
    addTrackForm,
    setAddTrackForm,
    path,
    handleGetAllTracksNContent,
    editModal,
    setEditModal,
}) {
    const handleRequest = async () => {
        try {
            if (path === '/update_content') {
                const { open: _, id: content_id, ...formData } = editContentForm

                await api.put(`/admin/update_content/${content_id}`, formData);

                setEditContentForm({ open: false });
                handleGetAllTracksNContent();
                setConfirmModal(false);
                setEditTrackModal(false);
            }

            if (path === '/edit_track') {
                const { track_id, name } = editTrackModal;

                await api.put(`/admin/update_track/${track_id}`, { name });

                handleGetAllTracksNContent();
                setConfirmModal(false);
                setEditTrackModal(false);
                setAddTrackForm({ name: '', error: '' });

            }

            if (path === "/add_track") {
                const { error: _, ...formData } = addTrackForm;
                await api.post("/admin/add_track", formData);

                setConfirmModal(false);
                setOpenAddTrackModal(false);
                setAddTrackForm({ name: "", error: "" });
            }
            if (path === "/add_content") {
                const getId = addContentForm.track_id.split(" ").at(-1);

                const { error: _, ...formData } = addContentForm;

                await api.post("/admin/add_content", {
                    ...formData,
                    track_id: getId,
                });

                setConfirmModal(false);
                setOpenAddContentModal(false);
                setAddContentForm({
                    name: "",
                    subtitle: "",
                    track_id: "",
                    type: "",
                    duration: "",
                    creator: "",
                    url: "",
                    description: "",
                    url_image: "",
                    error: "",
                });
            }
            handleGetAllTracksNContent();
        } catch (error) {
            if (path === '/add_track') {
                setConfirmModal(false);
                setAddTrackForm({
                    ...addTrackForm,
                    error: error.response.data.message,
                });
            }
            if (path === "/add_content") {
                setConfirmModal(false);
                setAddContentForm({
                    ...addContentForm,
                    error: error.response.data.message,
                });
            }
            if (path === "/edit_track") {
                setConfirmModal(false);
                setEditTrackModal({ ...editTrackModal, error: error.response.data.message });
            }
        }
    };

    const handleClose = () => {
        setConfirmModal(false);
    };

    return (
        <div className="modal-bg-stage2">
            <ConfirmCard className="flex">
                <button
                    className="bg-[#a843e0] px-4 py-2"
                    onClick={handleClose}
                >
                    Não
                </button>
                <button
                    className="bg-[#871cd3] px-4 py-2"
                    onClick={handleRequest}
                >
                    Sim
                </button>
            </ConfirmCard>
        </div>
    );
}
