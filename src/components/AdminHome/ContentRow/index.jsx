import { Pencil, Trash } from 'phosphor-react';

export default function ContentRow({ content, existingTracks }) {

    const { name } = existingTracks.find((track) => {
        return track.id === content.track_id;
    });

    return (
        <tr className='h-10'>
            <td className='truncate w-8'>{content?.name}</td>
            <td className='truncate'>{content?.type}</td>
            <td className='truncate'>{content?.duration}</td>
            <td className='truncate'>{content?.creator}</td>
            <td className='truncate'>{name}</td>
            <td className='flex justify-center py-4 gap-3'>
                <Pencil className='hover:scale-105 cursor-pointer' size={24} />
                <Trash className='hover:scale-105 cursor-pointer' size={24} />
            </td>
        </tr>
    )
}