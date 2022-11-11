import { Container } from './styled';
import Iframe from 'react-iframe'

export default function VideoContainer({ trackInfo }) {
    return (
        <Container>
            <Iframe
                className='border-radius-primary'
                url={trackInfo?.trackContent[trackInfo.current].url}
                width="100%"
                height="100%"
            />
        </Container>
    )
}