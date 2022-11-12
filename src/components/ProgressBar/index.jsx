import { useEffect, useState } from 'react';
import { ProgressValue, ProgressBarOver, ProgressBarUnder } from './styled';

export default function ProgressBar({ trackInfo, text, color }) {
    const totalProgress = Number(trackInfo?.totalProgress);
    const currentProgress = Number(trackInfo?.currentProgress);
    const percentage = Number(((100 * currentProgress) / totalProgress).toFixed());

    return (
        <>
            <ProgressValue>
                {text && `${progressNumbers?.currentProgress}% ${text}`}
            </ProgressValue>
            <ProgressBarOver color={color}>
                <ProgressBarUnder primary={percentage} color={color} />
            </ProgressBarOver>
        </>
    )
}