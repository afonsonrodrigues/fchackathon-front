import { useLocation } from 'react-router-dom';
import api from '../../../services/api';
import '../../../styles/utils.css';
import { getItem } from '../../../utils/storage';
import { ContentRow, CustomCheckBox, CustomCheckboxWrapper, ItemInfoWrapper, TitleWrapper, TypeTag } from './styled';

export default function ListItem({ trackInfo, setTrackInfo, handleGetUserSignedInfo }) {
    const location = useLocation();

    const handleChangeContent = (e) => {
        const dataId = Number(e.target.getAttribute('data-id'));

        const findIndex = trackInfo?.trackContent?.find((item) => {
            return item.id === dataId;
        });
        const newCurrent = trackInfo?.trackContent?.indexOf(findIndex);

        setTrackInfo({ ...trackInfo, current: newCurrent });
    }

    const handleCheckAsDone = async (e) => {
        const content_id = Number(e.target.getAttribute('data-id'));
        const user_id = Number(getItem('id'));
        const track_id = Number(location.state.trackId);
        const complete = e.target.checked;

        try {
            await api.put('/user/content/complete', { content_id, user_id, track_id, complete });

            handleGetUserSignedInfo();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {
                trackInfo?.trackContent?.map((content, index) => {
                    return (
                        <ContentRow key={content?.id} className='row space-btw align-center' data-id={content?.id}>
                            <ItemInfoWrapper onClick={handleChangeContent} className='column gap-8' data-id={content?.id}>
                                <TitleWrapper className='row space-btw align-center' data-id={content?.id}>
                                    <h2 data-id={content?.id}>{content?.name}</h2>
                                    <span data-id={content?.id}>{content?.duration}</span>
                                </TitleWrapper>
                                <div className='row align-center gap-16' data-id={content.id}>
                                    <TypeTag data-id={content?.id}>{content?.type}</TypeTag>
                                    <span data-id={content?.id}>{content?.creator}</span>
                                </div>
                            </ItemInfoWrapper>
                            <CustomCheckboxWrapper onChange={handleCheckAsDone} data-id={content?.id} className='column align-center justify-center'>
                                <CustomCheckBox checked={content?.complete} data-id={content?.id} type="checkbox" />
                            </CustomCheckboxWrapper>
                        </ContentRow>
                    )
                })
            }
        </>
    )
}