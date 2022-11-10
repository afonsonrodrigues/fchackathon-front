import SignUpForm from "../../components/SignUpPage/SignUpForm";
import { OuterBg } from "../../components/OuterBg/styled";
import { OuterTitle } from "./styled";

export default function SignUp() {
    return (
        <OuterBg className="column align-center justify-center">
            <OuterTitle>Orange Evolution</OuterTitle>
            <SignUpForm />
        </OuterBg>
    );
}
