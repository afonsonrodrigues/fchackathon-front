import '../../../styles/utils.css';
import { ListContainer } from './styled';
import ListItem from '../ListItem';

export default function ContentListContainer({ trackInfo, setTrackInfo }) {
    return (
        <ListContainer className='column'>
            <ListItem trackInfo={trackInfo} setTrackInfo={setTrackInfo} />
        </ListContainer>
    )
}