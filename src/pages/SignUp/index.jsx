import SignUpForm from "../../components/SignUpPage/SignUpForm";
import { OuterBg } from "../../components/OuterBg/styled";
import { OuterTitle } from "./styled";
import { useEffect } from "react";

export default function SignUp() {

    useEffect(() => {
        const canControlScrollRestoration = 'scrollRestoration' in window.history
        if (canControlScrollRestoration) {
            window.history.scrollRestoration = 'manual';
        }

        window.scrollTo(0, 0);
    }, []);

    return (
        <OuterBg className="column align-center justify-center">
            <OuterTitle>Orange Evolution</OuterTitle>
            <SignUpForm />
        </OuterBg>
    );
}
