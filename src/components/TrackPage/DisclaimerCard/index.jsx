import { DisclaimerContainer, TextWrapper, Title, Text, CustomButton } from './styled';
import FCamaraLogo from '../../../assets/fcamara-logo.svg';
import AluraLogo from '../../../assets/alura-logo.svg';
import RocketLogo from '../../../assets/rocket-logo.svg';
import CubosLogo from '../../../assets/cubos-logo.svg';
import '../../../styles/utils.css';

export default function DisclaimerCard() {
    return (
        <DisclaimerContainer className='column'>
            <div className='row space-btw'>
                <TextWrapper className='column gap-24'>
                    <Title>
                        Comunidade, cultura e colaboração
                    </Title>
                    <Text>
                        Inpirados na cultura OPEN, que nasceu do conceito de colaborar, aliamos nosso conhecimento com conteúdos de parceiros que são referência nacional para levar à comunidade trilhas de conhecimento nas áreas tech, aliando soft e hard skills, com o objetivo de formar pessoas, mudar vidas e acelerar o desenvolvimento da comunidade tech.
                    </Text>
                    <Text>
                        O que queremos para o futuro? <br />
                        Nossa visão de futuro é que o ecossistema Orange Juice faça parte da revolução tecnológica e social que acontecerá nos próximos anos. E não queremos fazer isso sozinhos, você é nosso parceiro para que essa transformação seja incrível!
                    </Text>
                </TextWrapper>
                <CustomButton className='call-button'>
                    Iniciar trilha
                </CustomButton>
            </div>
            <Title style={{ textAlign: 'center', marginBottom: '4.8rem' }}>
                Quem apoia
            </Title>
            <div className='row space-btw align-center'>
                <img src={FCamaraLogo} alt="fcamara's logo" />
                <img src={AluraLogo} alt="alura's logo" />
                <img src={RocketLogo} alt="rocketseat's logo" />
                <img src={CubosLogo} alt="cubos's logo" />
            </div>
        </DisclaimerContainer>
    )
}