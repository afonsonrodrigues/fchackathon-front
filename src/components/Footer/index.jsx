import { CustomFooter, BrandContainer, RightContainer, RightContainerTitle, LinksWrapper } from './styled';
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
                    <NavLink
                        className='max-content'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={onHover[1] ? { borderBottom: `1px solid ${onHover.borderColor}` } : { borderBottom: `1px solid var(--primary-color-900)` }}
                        name='1' >
                        Orange Juice
                    </NavLink>
                    <NavLink
                        className='max-content'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={onHover[2] ? { borderBottom: `1px solid ${onHover.borderColor}` } : { borderBottom: `1px solid var(--primary-color-900)` }}
                        name='2'>
                        Orange Hub
                    </NavLink>
                    <NavLink
                        className='max-content'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={onHover[3] ? { borderBottom: `1px solid ${onHover.borderColor}` } : { borderBottom: `1px solid var(--primary-color-900)` }}
                        name='3'>
                        Orange Blog
                    </NavLink>
                    <NavLink
                        className='max-content'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={onHover[4] ? { borderBottom: `1px solid ${onHover.borderColor}` } : { borderBottom: `1px solid var(--primary-color-900)` }}
                        name='4'>
                        Orange Evolution
                    </NavLink>
                    <NavLink
                        className='max-content'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={onHover[5] ? { borderBottom: `1px solid ${onHover.borderColor}` } : { borderBottom: `1px solid var(--primary-color-900)` }}
                        name='5'>
                        Orange Talks
                    </NavLink>
                    <NavLink
                        className='max-content'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={onHover[6] ? { borderBottom: `1px solid ${onHover.borderColor}` } : { borderBottom: `1px solid var(--primary-color-900)` }}
                        name='6'>
                        Orange Cast
                    </NavLink>
                    <NavLink
                        className='max-content'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={onHover[7] ? { borderBottom: `1px solid ${onHover.borderColor}` } : { borderBottom: `1px solid var(--primary-color-900)` }}
                        name='7'>
                        Programa de formação
                    </NavLink>
                    <NavLink
                        className='max-content'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={onHover[8] ? { borderBottom: `1px solid ${onHover.borderColor}` } : { borderBottom: `1px solid var(--primary-color-900)` }}
                        name='8'>
                        FAQ
                    </NavLink>
                    <NavLink
                        className='max-content'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={onHover[9] ? { borderBottom: `1px solid ${onHover.borderColor}` } : { borderBottom: `1px solid var(--primary-color-900)` }}
                        name='9'>
                    Contato
                </NavLink>
            </LinksWrapper>
        </RightContainer>
        </CustomFooter >
    )
}