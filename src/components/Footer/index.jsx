import { CustomFooter, BrandContainer, RightContainer, RightContainerTitle, LinksWrapper, AnimationContainer, textBox } from './styled';
import OrangeBrand from '../../assets/orange-brand.svg';
import { NavLink } from 'react-router-dom';
import '../../styles/utils.css';
import { useState } from 'react';

export default function Footer() {
    const [onHover, setOnHover] = useState({
        borderColor: 'transparent',
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
    });

    const handleMouseEnter = (e) => {
        setOnHover({ ...onHover, borderColor: 'orange', [e.target.name]: true });
    }

    const handleMouseLeave = () => {
        setOnHover({
            borderColor: 'transparent',
            1: false,
            2: false,
            3: false,
            4: false,
            5: false,
            6: false,
            7: false,
            8: false,
            9: false,
        });
    }

    return (
        <CustomFooter className='row justify-center'>
            <BrandContainer>
                <img src={OrangeBrand} alt="Orange Evolution brand" />
            </BrandContainer>
            <RightContainer className='column gap-38'>
                <RightContainerTitle>Conheça o ecossistema tech Orange Juice</RightContainerTitle>
                <LinksWrapper className='column'>
                    <AnimationContainer>
                        <NavLink
                            name='1'
                        >
                            Orange Juice
                        </NavLink>
                    </AnimationContainer>
                    <AnimationContainer>
                        <NavLink
                            name='2'>
                            Orange Hub
                        </NavLink>
                    </AnimationContainer>
                    <AnimationContainer>
                        <NavLink
                            name='3'>
                            Orange Blog
                        </NavLink>
                    </AnimationContainer>
                    {/* <AnimationContainer>
                        <NavLink
                            name='4'>
                            Orange Evolution
                        </NavLink>
                    </AnimationContainer> */}
                    <AnimationContainer>
                        <NavLink
                            name='5'>
                            Orange Talks
                        </NavLink>
                    </AnimationContainer>
                    <AnimationContainer>
                        <NavLink
                            name='6'>
                            Orange Cast
                        </NavLink>
                    </AnimationContainer>
                    <AnimationContainer>
                        <NavLink
                            name='7'>
                            Programa de formação
                        </NavLink>
                    </AnimationContainer>
                    <AnimationContainer>
                        <NavLink
                            name='8'>
                            FAQ
                        </NavLink>
                    </AnimationContainer>
                    <AnimationContainer>
                        <NavLink
                            name='9'>
                            Contato
                        </NavLink>
                    </AnimationContainer>
                </LinksWrapper>
            </RightContainer>
        </CustomFooter >
    )
}