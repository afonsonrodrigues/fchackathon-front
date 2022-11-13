import { NavLink } from 'react-router-dom';
import '../../styles/utils.css';
import { BannerBg, BannerContainer, BannerImageContainer, BannerText, BannerTextWrapper, BannerTitle, EmptyContainer, SpotifyButton } from './styled';

export default function SpotifyBanner() {
    return (
        <BannerBg className='w-full h-[256px] mt-12 sm:mt-[88px] lg:mt-[107px] lg:h-[389px] flex justify-center items-center'>
            <div className=''>
                <BannerContainer className='lg:h-[389px] lg:xl:w-[1024px] xl:w-[1280px] flex flex-col lg:flex-row items-center'>
                    <BannerTextWrapper className='flex flex-col items-center lg:ml-[75px]'>
                        <BannerTitle className='text-xl font-bold mb-4'
                        >
                            Ouça o Orange Cast no Spotify
                        </BannerTitle>
                        <BannerText className='text-base mb-6'>
                            A comunidade tech mais vitaminada! <br />
                            Counteúdos, tecnologia e formação.
                        </BannerText>
                        <a
                            href="https://open.spotify.com/show/5zy6DpF8V3N8rBbWO7OE79?si=28729f1009ec4122"
                            target="_blank"
                        >
                            <SpotifyButton className='w-[154px] h-[52px]'>
                                Ouvir agora
                            </SpotifyButton>
                        </a>
                    </BannerTextWrapper>
                    <EmptyContainer className='hidden lg:block w-10 h-[177px]'>
                        <BannerImageContainer
                            className='w-[539px] h-[423px] right-0'
                        />
                    </EmptyContainer>
                </BannerContainer>
            </div>
        </BannerBg>
    )
}