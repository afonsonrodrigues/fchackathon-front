import { useState } from 'react';
import '../../../styles/utils.css';
import { ArticleImage, ArticleSubtitle, ArticleText, ArticleTitle, Container, CustomButton, WarningSnackBar, WarningImage } from './styled';
import WarningIcon from '../../../assets/warning-icon.svg';

export default function ArticleContainer({ trackInfo }) {
    const [currentContent, setCurrentContent] = useState({ ...trackInfo?.trackContent[trackInfo.current] });

    return (
        < Container className='column' >
            <ArticleTitle>
                {currentContent?.name}
            </ArticleTitle>
            <ArticleSubtitle>
                {currentContent?.subtitle && currentContent?.subtitle}
            </ArticleSubtitle>
            <ArticleImage src={currentContent?.url_image && currentContent?.url_image} />
            <ArticleText>
                {currentContent?.description}
            </ArticleText>
            <a href={currentContent?.url} target='_blank'>
                <CustomButton className='call-button'>{currentContent?.type === 'artigo' ? 'Leia o artigo' : 'Acesse o conteúdo'}</CustomButton>
            </a>
            <WarningSnackBar className='row align-center gap-16'>
                <WarningImage src={WarningIcon} />
                <p>Não se esqueça de marcar este conteúdo como concluído após terminá-lo.</p>
            </WarningSnackBar>
        </Container >
    )
}