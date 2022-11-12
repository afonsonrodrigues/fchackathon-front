import { useEffect, useState } from 'react';
import '../../../styles/utils.css';
import { ProgressBarWrapper, Title } from './styled';
import ProgressBar from '../../ProgressBar';

export default function ProgressBarContainer({ trackInfo, text }) {
    return (
        <ProgressBarWrapper className='column'>
            <Title>
                Meu progresso
            </Title>
            <ProgressBar text='' trackInfo={trackInfo} />
        </ProgressBarWrapper>
    )
}