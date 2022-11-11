import '../../../styles/utils.css';
import { ContentRow, CustomCheckBox, CustomCheckboxWrapper, TypeTag } from './styled';

export default function ListItem() {
    return (
        <ContentRow className='row space-btw align-center'>
            <div className='column gap-8'>
                <div className='row align-center gap-16'>
                    <h2>Testeeeeeeeeeeeeeeeeeeeeeeeeee</h2>
                    <span>00:03,00 min</span>
                </div>
                <div className='row align-center gap-16'>
                    <TypeTag>tipo</TypeTag>
                    <span>Track por</span>
                </div>
            </div>
            <CustomCheckboxWrapper className='column align-center justify-center'>
                <CustomCheckBox type="checkbox" />
            </CustomCheckboxWrapper>
        </ContentRow>
    )
}