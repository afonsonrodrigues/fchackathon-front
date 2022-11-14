import { Link } from "react-router-dom";
import "../../../styles/utils.css";
import { DescriptionMidiaContainer, Title, TitleDiv } from "./styled";

export default function DescriptionMidia(props) {
    return (
        <DescriptionMidiaContainer>
            <TitleDiv className="column align-start">
                <Title>{props.tittle}</Title>
                <text
                    style={{
                        fontSize: "18px",
                        marginTop: "1.7rem",
                        width: "75%",
                    }}
                >
                    {props.text}
                </text>
                <a
                    style={{ marginTop: "1.7rem" }}
                    href={props.link}
                    target={"_blank"}
                >
                    <text
                        style={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            textDecorationLine: "underline",
                            cursor: "pointer",
                        }}
                    >
                        {props.acess}
                    </text>
                </a>
            </TitleDiv>
        </DescriptionMidiaContainer>
    );
}
