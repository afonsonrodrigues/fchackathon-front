import '../../../styles/utils.css';
import { ContentRow, CustomCheckBox, CustomCheckboxWrapper, TypeTag, TitleWrapper } from './styled';

export default function ListItem({ trackInfo, setTrackInfo }) {

    return (
        <>
            {
                trackInfo?.trackContent?.map((content) => {
                    return (
                        <ContentRow key={content.id} className='row space-btw align-center'>
                            <div className='column gap-8'>
                                <TitleWrapper className='row space-btw align-center'>
                                    <h2>{content.name}</h2>
                                    <span>{content.duration}</span>
                                </TitleWrapper>
                                <div className='row align-center gap-16'>
                                    <TypeTag>{content.type}</TypeTag>
                                    <span>{content.creator}</span>
                                </div>
                            </div>
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