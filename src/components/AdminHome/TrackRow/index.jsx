import { Pencil, Trash } from "phosphor-react";
import { useState } from "react";
import api from "../../../services/api";

export default function TrackRow({
    track,
    handleGetAllTracksNContent,
    setEditModal,
    editModal,
}) {
    const [popUp, setPopUp] = useState(false);

    const handleDelete = async () => {
        try {
            await api.delete(`/admin/del_track/${track.id}`);

            setPopUp(!popUp);
            handleGetAllTracksNContent();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <tr className="h-10 cursor-pointer">
                <td className="truncate">{track.name}</td>
                <td className="truncate">15/11/22</td>
                <td className="truncate">Melhor Admin</td>
                <td className="flex justify-center py-4 gap-3 relative">
                    <Pencil
                        className="hover:scale-105 cursor-pointer"
                        onClick={(e) =>
                            setEditModal({
                                ...editModal,
                                open: true,
                                track_id: track.id,
                            })
                        }
                        color="#0C16BB"
                        size={24}
                    />
                    <Trash
                        className="hover:scale-105 cursor-pointer"
                        color="#FF0000"
                        onClick={(e) => setPopUp(!popUp)}
                        size={24}
                    />
                    {popUp && (
                        <div className="flex flex-col items-center justify-center absolute bg-white w-[170px] h-20 bottom-[-65px] right-16 z-10">
                            Confirma a exclusão?
                            <div className="flex items-center justify-center gap-3">
                                <button
                                    onClick={(e) => setPopUp(!popUp)}
                                    className="bg-emerald-400 px-2"
                                >
                                    Não
                                </button>
                                <button
                                    onClick={handleDelete}
                                    className="bg-red-500 px-2"
                                >
                                    Sim
                                </button>
                            </div>
                        </div>
                    )}
                </td>
            </tr>
        </>
    );
}
