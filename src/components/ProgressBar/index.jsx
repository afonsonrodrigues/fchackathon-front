import { ProgressValue, ProgressBarOver, ProgressBarUnder } from './styled';

export default function ProgressBar({ progressNumbers, text }) {
    console.log(progressNumbers.current);

    return (
        <>
            <ProgressValue>
                {`${progressNumbers.current}% ${text}`}
            </ProgressValue>
            <ProgressBarOver>
                <ProgressBarUnder primary={progressNumbers.current} />
            </ProgressBarOver>
        </>
    )
}