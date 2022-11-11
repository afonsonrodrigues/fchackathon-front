import '../../../styles/utils.css';
import { ListContainer } from './styled';
import ListItem from '../ListItem';

export default function ContentListContainer({ trackContent, setTrackContent }) {
    return (
        <ListContainer className='column'>
            <ListItem trackContent={trackContent} setTrackContent={setTrackContent} />
        </ListContainer>
    )
}