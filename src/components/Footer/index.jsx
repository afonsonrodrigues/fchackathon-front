import { NavLink } from 'react-router-dom';
import OrangeBrand from '../../assets/orange-brand.svg';
import LinkAnimationContainer from '../LinkAnimationContainer';
import '../../styles/utils.css';
import { BrandContainer, CustomFooter, LinksWrapper, RightContainer, RightContainerTitle } from './styled';

export default function Footer() {
    return (
        <CustomFooter className='row justify-center'>
            <BrandContainer>
                <img src={OrangeBrand} alt="Orange Evolution brand" />
            </BrandContainer>
            <RightContainer className='column gap-38'>
                <RightContainerTitle>Conheça o ecossistema tech Orange Juice</RightContainerTitle>
                <LinksWrapper className='column'>
                    <LinkAnimationContainer>
                        <NavLink
                            name='1'
                        >
                            Orange Juice
                        </NavLink>
                    </LinkAnimationContainer>
                    <LinkAnimationContainer>
                        <NavLink
                            name='2'>
                            Orange Hub
                        </NavLink>
                    </LinkAnimationContainer>
                    <LinkAnimationContainer>
                        <NavLink
                            name='3'>
                            Orange Blog
                        </NavLink>
                    </LinkAnimationContainer>
                    {/* <LinkAnimationContainer>
                        <NavLink
                            name='4'>
                            Orange Evolution
                        </NavLink>
                    </LinkAnimationContainer> */}
                    <LinkAnimationContainer>
                        <NavLink
                            name='5'>
                            Orange Talks
                        </NavLink>
                    </LinkAnimationContainer>
                    <LinkAnimationContainer>
                        <NavLink
                            name='6'>
                            Orange Cast
                        </NavLink>
                    </LinkAnimationContainer>
                    <LinkAnimationContainer>
                        <NavLink
                            name='7'>
                            Programa de formação
                        </NavLink>
                    </LinkAnimationContainer>
                    <LinkAnimationContainer>
                        <NavLink
                            name='8'>
                            FAQ
                        </NavLink>
                    </LinkAnimationContainer>
                    <LinkAnimationContainer>
                        <NavLink
                            name='9'>
                            Contato
                        </NavLink>
                    </LinkAnimationContainer>
                </LinksWrapper>
            </RightContainer>
        </CustomFooter >
    )
}