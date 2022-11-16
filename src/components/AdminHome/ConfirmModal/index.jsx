import { ConfirmCard } from "./styled";
import api from "../../../services/api";
import "../../../styles/utils.css";

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
            if (path === "/edit_track") {
                const { track_id, name } = editModal;
                await api.put(`/admin/update_track/${track_id}`, track_id);

                setConfirmModal(false);
                setOpenAddTrackModal(false);
                setAddTrackForm({ name: "", error: "" });
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
            if (path === "/add_track") {
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
                setEditModal({
                    ...editModal,
                    error: error.response.data.message,
                });
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
