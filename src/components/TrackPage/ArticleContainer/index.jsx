import { useEffect, useState } from 'react';
import '../../../styles/utils.css';
import { ArticleImage, ArticleSubtitle, ArticleText, ArticleTitle, Container, CustomButton } from './styled';
import Don from '../../../assets/don-norman.png';
import Banner from '../../../assets/banner1.png';

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
        </Container >
    )
}