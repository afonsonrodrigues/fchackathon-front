import '../../styles/utils.css';
import { BannerBg, BannerContainer, BannerImageContainer, BannerText, BannerTextWrapper, BannerTitle, EmptyContainer, SpotifyButton } from './styled';

export default function SpotifyBanner() {
    return (
        <BannerBg className='column align-center'>
            <BannerContainer className='row space-btw align-center'>
                <BannerTextWrapper className='column gap-24'>
                    <BannerTitle>
                        Ouça o Orange Cast no Spotify
                    </BannerTitle>
                    <BannerText>
                        A comunidade tech mais vitaminada! <br />
                        Counteúdos, tecnologia e formação.
                    </BannerText>
                    <SpotifyButton>
                        <a
                            href="https://open.spotify.com/show/5zy6DpF8V3N8rBbWO7OE79?si=28729f1009ec4122"
                            target="_blank"
                        >
                            Ouvir agora
                        </a>
                    </SpotifyButton>
                </BannerTextWrapper>
                <EmptyContainer />
                <BannerImageContainer />
            </BannerContainer>
        </BannerBg>
    )
}