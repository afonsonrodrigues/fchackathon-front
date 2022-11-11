import '../../../styles/utils.css';
import { ListContainer } from './styled';
import ListItem from '../ListItem';

export default function ContentListContainer({ trackInfo, setTrackInfo, handleGetUserSignedInfo }) {
    return (
        <ListContainer className='column'>
            <ListItem trackInfo={trackInfo} setTrackInfo={setTrackInfo} handleGetUserSignedInfo={handleGetUserSignedInfo} />
        </ListContainer>
    )
}