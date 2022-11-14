import { ProgressBarOver, ProgressBarUnder, ProgressValue } from './styled';

export default function ProgressBar({ trackInfo, text, trackStyle, progressNumbers }) {
    let totalProgress, currentProgress, percentage;

    if (trackInfo) {
        totalProgress = Number(trackInfo?.totalProgress);
        currentProgress = Number(trackInfo?.currentProgress);
        percentage = Number(((100 * currentProgress) / totalProgress).toFixed());
    } else {
        totalProgress = Number(progressNumbers?.totalProgress);
        currentProgress = Number(progressNumbers?.currentProgress);
        percentage = Number(((100 * currentProgress) / totalProgress).toFixed());
    }

    return (
        <>
            <ProgressValue>
                {text && `${percentage}%`}
            </ProgressValue>
            <ProgressBarOver color={!text ? trackStyle.bgColor : null}>
                <ProgressBarUnder className='h-[14px]' primary={percentage} color={!text ? trackStyle.bgColor : null} />
            </ProgressBarOver>
        </>
    )
}