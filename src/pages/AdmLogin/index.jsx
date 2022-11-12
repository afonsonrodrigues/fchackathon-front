import LoginForm from "../../components/LoginForm";
import { useEffect } from "react";

export default function AdmLogin() {

    useEffect(() => {
        const canControlScrollRestoration = 'scrollRestoration' in window.history
        if (canControlScrollRestoration) {
            window.history.scrollRestoration = 'manual';
        }

        window.scrollTo(0, 0);
    }, []);

    return (
        <LoginForm path={'/admin/login'} />
    )
}