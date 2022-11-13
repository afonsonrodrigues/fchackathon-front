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
        <CallToActionContainer className='flex flex-col px-4 mt-28 sm:mt-[120px] sm:px-16 lg:w-[622px] lg:mt-32'>
            <Title className='px-10 lg:px-0 sm:w-full lg:w-full sm:mb-4 text-2xl font-semibold'>Boas vindas à <Brand className='text-3xl font-normal'>Orange Evolution</Brand></Title>
            <Subtitle className='leading-10 sm:mb-6'>Estamos de casa nova!</Subtitle>
            <Text className='mb-10'>Explore conhecimentos que estão transformando indústrias, negócios e vidas através de trilhas gratuitas em <strong>Desenvolvimento, UX/UI Design e QA!</strong></Text>
            <HashLink smooth='true' timeout={1000} scroll={el => scrollWithOffset(el)} to="/home#tracks-list">
                <ShowTracksButton className='px-10 h-[52px] mb-[78px] sm:mb-[88px] lg:mb-[105px] secondary-button'>
                    Conheça as trilhas
                </ShowTracksButton>
            </HashLink>
        </CallToActionContainer>
    )
}