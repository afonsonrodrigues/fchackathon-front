import { CallToActionContainer, Title, Brand, Subtitle, Text, ShowTracksButton } from './styled';
import '../../../styles/utils.css';

export default function CallToAction() {
    return (
        <CallToActionContainer className='column align-center'>
            <Title>Boas vindas à <Brand>Orange Evolution</Brand></Title>
            <Subtitle>Estamos de casa nova!</Subtitle>
            <Text>Explore conhecimentos que estão transformando indústrias, negócios e vidas através de trilhas gratuitas em <strong>Desenvolvimento, UX/UI Design e QA!</strong></Text>
            <ShowTracksButton>
                Conheça as trilhas
            </ShowTracksButton>
        </CallToActionContainer>
    )
}