import { AddTrackCard } from './styled';
import '../../../styles/utils.css';

export default function AddTrack() {
    return (
        <AddTrackCard className='row space-btw align-center'>
            <div>Adicionar Track</div>
            <button>Add Track</button>
        </AddTrackCard>
    )
}