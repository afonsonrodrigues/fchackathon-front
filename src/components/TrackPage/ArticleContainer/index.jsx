import { useState } from 'react';
import '../../../styles/utils.css';
import { ArticleImage, ArticleSubtitle, ArticleText, ArticleTitle, Container, CustomButton, WarningSnackBar, WarningImage } from './styled';
import WarningIcon from '../../../assets/warning-icon.svg';

export default function ArticleContainer({ trackInfo }) {
    const [currentContent, setCurrentContent] = useState({ ...trackInfo?.trackContent[trackInfo.current] });

    return (
        < Container className='flex flex-col lg:w-[588px] xl:w-[622px]' >
            <ArticleTitle className='text-2xl font-bold mb-2'>
                {currentContent?.name}
            </ArticleTitle>
            <ArticleSubtitle className='text-base mb-4'>
                {currentContent?.subtitle && currentContent?.subtitle}
            </ArticleSubtitle>
            <ArticleImage className='mb-6 w-full' src={currentContent?.url_image && currentContent?.url_image} />
            <ArticleText className='mb-6 max-h-[168px] max-w-[358px] sm:max-w-full overflow-hidden  text-ellipsis'>
                {currentContent?.description}
            </ArticleText>
            <a href={currentContent?.url} target='_blank'>
                <CustomButton className='call-button w-[185px] h-[52px] mb-10'>{currentContent?.type === 'Artigo' ? 'Leia o artigo' : 'Acesse o conteúdo'}</CustomButton>
            </a>
            <WarningSnackBar className='flex items-center px-4 py-2 gap-4'>
                <WarningImage src={WarningIcon} />
                <p className='text-xs'>Não se esqueça de marcar este conteúdo como concluído após terminá-lo.</p>
            </WarningSnackBar>
        </Container >
    )
}