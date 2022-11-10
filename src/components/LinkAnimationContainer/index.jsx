import { AnimationContainer } from './styled';

export default function LinkAnimationContainer(props) {
    return (
        <AnimationContainer primary={props.primary}>
            {props.children}
        </AnimationContainer>
    )
}