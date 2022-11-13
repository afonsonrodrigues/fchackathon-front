import { Container } from './styled';
import Iframe from 'react-iframe'

export default function VideoContainer({ trackInfo }) {
    return (
        <Container className='flex h-full w-full sm:h-[417px] lg:h-[417px] sm:w-[703px]'>
            <Iframe
                className='border-radius-primary h-[302px] sm:h-[417px] lg:h-[417px] w-full sm:w-[703px]'
                url={trackInfo?.trackContent[trackInfo.current].url}
            />
        </Container>
    )
}