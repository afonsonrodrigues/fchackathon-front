import { HashLink } from 'react-router-hash-link';
import '../../../styles/utils.css';
import { Brand, CallToActionContainer, ShowTracksButton, Subtitle, Text, Title } from './styled';

export default function CallToAction() {

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -120; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    return (
        <CallToActionContainer className='column align-center'>
            <Title>Boas vindas à <Brand>Orange Evolution</Brand></Title>
            <Subtitle>Estamos de casa nova!</Subtitle>
            <Text>Explore conhecimentos que estão transformando indústrias, negócios e vidas através de trilhas gratuitas em <strong>Desenvolvimento, UX/UI Design e QA!</strong></Text>
            <HashLink smooth='true' timeout={1000} scroll={el => scrollWithOffset(el)} to="/home#tracks-list">
                <ShowTracksButton className='secondary-button'>
                    Conheça as trilhas
                </ShowTracksButton>
            </HashLink>
        </CallToActionContainer>
    )
}