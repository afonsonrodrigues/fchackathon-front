import '../../styles/utils.css';
import { BannerBg, BannerContainer, BannerImageContainer, BannerText, BannerTextWrapper, BannerTitle, EmptyContainer, SpotifyButton } from './styled';

export default function SpotifyBanner() {
    return (
        <BannerBg className='w-full h-[256px] flex justify-center items-center'>
            <div>
                <BannerContainer className='flex flex-col justify-between items-center'>
                    <BannerTextWrapper className='flex flex-col items-center'>
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
                    <EmptyContainer className='hidden lg:block'>
                        <BannerImageContainer />
                    </EmptyContainer>
                </BannerContainer>
            </div>
        </BannerBg>
    )
}