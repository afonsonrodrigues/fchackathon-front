import "../../../styles/utils.css";
import { MidiaContainer, Logo, MidiaDiv } from "./styled";
import DescriptionMidia from "../DescriptionMidia";
import LogoYoutube from "../../../assets/logoyoutube.png";
import LogoSpotify from "../../../assets/logospotify.png";
import LogoOrangeHub from "../../../assets/logoorangehub.png";
import LogoMedium from "../../../assets/logomedium.png";
import LogoDiscord from "../../../assets/logodiscord.png";
import {
    acessDiscord,
    acessMedium,
    acessOrangeHub,
    acessSpotify,
    acessYoutube,
    discord,
    linkDiscord,
    linkMedium,
    linkOrangeHub,
    linkSpotify,
    linkYoutube,
    medium,
    orangeHub,
    spotify,
    tittleDiscord,
    tittleMedium,
    tittleOrangeHub,
    tittleSpotify,
    tittleYoutube,
    youtube,
} from "../../../assets/MidiaInfo.json";

export default function Midia() {
    return (
        <MidiaContainer className="column align-center">
            <MidiaDiv className="row align-center space-btw">
                <Logo image={LogoYoutube} />
                <DescriptionMidia
                    tittle={tittleYoutube}
                    text={youtube}
                    link={linkYoutube}
                    acess={acessYoutube}
                />
            </MidiaDiv>
            <MidiaDiv className="row align-center">
                <DescriptionMidia
                    tittle={tittleDiscord}
                    text={discord}
                    link={linkDiscord}
                    acess={acessDiscord}
                />
                <Logo image={LogoDiscord} />
            </MidiaDiv>
            <MidiaDiv className="row align-center space-btw">
                <Logo image={LogoMedium} />
                <DescriptionMidia
                    tittle={tittleMedium}
                    text={medium}
                    link={linkMedium}
                    acess={acessMedium}
                />
            </MidiaDiv>
            <MidiaDiv className="row align-center">
                <DescriptionMidia
                    tittle={tittleSpotify}
                    text={spotify}
                    link={linkSpotify}
                    acess={acessSpotify}
                />
                <Logo image={LogoSpotify} />
            </MidiaDiv>
            <MidiaDiv className="row align-center space-btw">
                <Logo image={LogoOrangeHub} height="283px" />
                <DescriptionMidia
                    tittle={tittleOrangeHub}
                    text={orangeHub}
                    link={linkOrangeHub}
                    acess={acessOrangeHub}
                />
            </MidiaDiv>
        </MidiaContainer>
    );
}
