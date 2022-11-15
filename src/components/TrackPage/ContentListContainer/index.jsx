import '../../../styles/utils.css';
import { ListContainer } from './styled';
import ListItem from '../ListItem';

export default function ContentListContainer({ trackInfo, setTrackInfo, handleGetUserSignedInfo }) {
    return (
        <ListContainer className='w-full lg:w-[435px] p-4 flex flex-col max-h-[268px] sm:max-h-[368px] lg:max-h-[368px] xl:max-h-[800px] justify-start gap-2 sm:w-[703px] xl:min-h-[600px]'>
            <ListItem trackInfo={trackInfo} setTrackInfo={setTrackInfo} handleGetUserSignedInfo={handleGetUserSignedInfo} />
        </ListContainer>
    )
}