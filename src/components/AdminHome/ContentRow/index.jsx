import { Pencil, Trash } from 'phosphor-react';
import { useState } from 'react';
import api from '../../../services/api';

export default function ContentRow({ content, existingTracks, handleGetAllTracksNContent, openEditContentModal, setOpenEditContentModal }) {
    const [popUp, setPopUp] = useState(false);

    const { name } = existingTracks.find((track) => {
        return track.id === content.track_id;
    });

    const handleDeleteContent = async () => {
        await api.delete(`/admin/del_content/${content.id}`);

        setPopUp(!popUp)
        handleGetAllTracksNContent();
    }

    return (
        <tr className='h-10'>
            <td className='truncate w-8'>{content?.name}</td>
            <td className='truncate'>{content?.type}</td>
            <td className='truncate'>{content?.duration}</td>
            <td className='truncate'>{content?.creator}</td>
            <td className='truncate'>{name}</td>
            <td className='flex justify-center py-4 gap-3 relative'>
                <Pencil className='hover:scale-105 cursor-pointer' onClick={(e) => setOpenEditContentModal({ ...openEditContentModal, open: true, ...content })} color='#0C16BB'
                    size={24} />
                <Trash className='hover:scale-105 cursor-pointer' color='#FF0000' onClick={(e) => setPopUp(!popUp)} size={24} />
                {popUp &&
                    <div className='flex flex-col items-center justify-center absolute bg-white w-[170px] h-20 bottom-[-65px] right-16 z-10'>
                        Confirma a exclusão?
                        <div className='flex items-center justify-center gap-3'>
                            <button onClick={(e) => setPopUp(!popUp)} className='bg-emerald-400 px-2'>Não</button>
                            <button onClick={handleDeleteContent} className='bg-red-500 px-2'>Sim</button>
                        </div>
                    </div>
                }
            </td>
        </tr>
    )
}