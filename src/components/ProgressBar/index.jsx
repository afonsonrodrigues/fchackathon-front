import { ProgressValue, ProgressBarOver, ProgressBarUnder } from './styled';

export default function ProgressBar({ progressNumbers, text, color }) {
    return (
        <>
            <ProgressValue>
                {text && `${progressNumbers.current}% ${text}`}
            </ProgressValue>
            <ProgressBarOver color={color}>
                <ProgressBarUnder primary={50} color={color} />
            </ProgressBarOver>
        </>
    )
}