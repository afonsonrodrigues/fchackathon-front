import { NavLink } from "react-router-dom";
import OrangeBrand from "../../assets/orange-brand.svg";
import LinkAnimationContainer from "../LinkAnimationContainer";
import "../../styles/utils.css";
import {
    BrandContainer,
    CustomFooter,
    LinksWrapper,
    RightContainer,
    RightContainerTitle,
} from "./styled";

export default function Footer() {
    return (
        <CustomFooter className="flex flex-col pb-8 lg:pb-0 items-center w-full sm:items-start sm:px-10 sm:h-[309px] lg:h-[250px] lg:items-center lg:justify-center">
            <div className="lg:flex lg:justify-between lg:w-[1024px]">
                <BrandContainer className="pt-14 mb-8 lg:pt-0 lg:flex lg:flex-col lg:justify-between">
                    <img src={OrangeBrand} alt="Orange Evolution brand" />
                </BrandContainer>
                <RightContainer className="flex flex-col">
                    <RightContainerTitle className="mb-12 pt-2">
                        Conheça o ecossistema tech Orange Juice
                    </RightContainerTitle>
                    <LinksWrapper className="flex flex-col px-4 sm:h-24 flex-wrap gap-x-8">
                        <LinkAnimationContainer>
                            <a
                                name="1"
                                href="https://digital.fcamara.com.br/orangejuice"
                                target={"_blank"}
                            >
                                Orange Juice
                            </a>
                        </LinkAnimationContainer>
                        <LinkAnimationContainer>
                            <a
                                name="2"
                                href="https://digital.fcamara.com.br/orangejuice#rd-section-l5h5qpid"
                                target={"_blank"}
                            >
                                Orange Hub
                            </a>
                        </LinkAnimationContainer>
                        <LinkAnimationContainer>
                            <a
                                name="3"
                                href="https://medium.com/orangejuicefc"
                                target={"_blank"}
                            >
                                Orange Blog
                            </a>
                        </LinkAnimationContainer>
                        <LinkAnimationContainer>
                            <a
                                name="5"
                                href="https://www.youtube.com/orangejuicefc"
                                target={"_blank"}
                            >
                                Orange Talks
                            </a>
                        </LinkAnimationContainer>
                        <LinkAnimationContainer>
                            <a
                                name="6"
                                href="https://open.spotify.com/show/5zy6DpF8V3N8rBbWO7OE79?si=45d0140798064511"
                                target={"_blank"}
                            >
                                Orange Cast
                            </a>
                        </LinkAnimationContainer>
                        <LinkAnimationContainer>
                            <a
                                name="7"
                                href="https://digital.fcamara.com.br/programadeformacao"
                                target={"_blank"}
                            >
                                Programa de formação
                            </a>
                        </LinkAnimationContainer>
                        <LinkAnimationContainer>
                            <a
                                name="8"
                                href="https://digital.fcamara.com.br/orangejuice#rd-section-joq3m2lv"
                                target={"_blank"}
                            >
                                FAQ
                            </a>
                        </LinkAnimationContainer>
                        <LinkAnimationContainer>
                            <a
                                name="9"
                                href="https://www.fcamara.com.br/contato"
                                target={"_blank"}
                            >
                                Contato
                            </a>
                        </LinkAnimationContainer>
                    </LinksWrapper>
                </RightContainer>
            </div>
        </CustomFooter>
    );
}
