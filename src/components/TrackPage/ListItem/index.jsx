import '../../../styles/utils.css';
import { ContentRow, CustomCheckBox, CustomCheckboxWrapper, TypeTag, TitleWrapper, ItemInfoWrapper } from './styled';

export default function ListItem({ trackInfo, setTrackInfo }) {

    const handleChangeContent = (e) => {
        const dataId = Number(e.target.getAttribute('data-id'));

        const findIndex = trackInfo.trackContent.find((item) => {
            return item.id === dataId;
        });
        const newCurrent = trackInfo.trackContent.indexOf(findIndex);

        setTrackInfo({ ...trackInfo, current: newCurrent });
    }

    return (
        <>
            {
                trackInfo?.trackContent?.map((content) => {
                    return (
                        <ContentRow key={content.id} className='row space-btw align-center' data-id={content.id}>
                            <ItemInfoWrapper onClick={handleChangeContent} className='column gap-8' data-id={content.id}>
                                <TitleWrapper className='row space-btw align-center' data-id={content.id}>
                                    <h2 data-id={content.id}>{content.name}</h2>
                                    <span data-id={content.id}>{content.duration}</span>
                                </TitleWrapper>
                                <div className='row align-center gap-16' data-id={content.id}>
                                    <TypeTag data-id={content.id}>{content.type}</TypeTag>
                                    <span data-id={content.id}>{content.creator}</span>
                                </div>
                            </ItemInfoWrapper>
                            <CustomCheckboxWrapper className='column align-center justify-center'>
                                <CustomCheckBox type="checkbox" />
                            </CustomCheckboxWrapper>
                        </ContentRow>
                    )
                })
            }
        </>
    )
}