import { HashLink } from 'react-router-hash-link';
import '../../../styles/utils.css';
import { Brand, CallToActionContainer, ShowTracksButton, Subtitle, Text, Title } from './styled';

export default function CallToAction() {
    return (
        <CallToActionContainer className='column align-center'>
            <Title>Boas vindas à <Brand>Orange Evolution</Brand></Title>
            <Subtitle>Estamos de casa nova!</Subtitle>
            <Text>Explore conhecimentos que estão transformando indústrias, negócios e vidas através de trilhas gratuitas em <strong>Desenvolvimento, UX/UI Design e QA!</strong></Text>
            <ShowTracksButton className='secondary-button'>
                <HashLink to="/home#tracks-list">
                    Conheça as trilhas
                </HashLink>
            </ShowTracksButton>
        </CallToActionContainer>
    )
}