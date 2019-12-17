
import * as React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

interface TransitionWrapperProps {
  props: any
};

const TransitionWrapper: React.FC<TransitionWrapperProps> = (props) => {
  const [ref, inView] = useInView({
    opacity: inView ? 1 : 0,
    transform: inView ? `translate3d(0, 0, 0)` : `translate3d(0, 30px, 0)`
  });

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? `translate3d(0, 0, 0)` : `translate3d(0, 30px, 0)`
  });

  return (
    <animated.div ref={props.forwardRef} style={{ ...springProps }}>{props.children}</animated.div>
  );
}

export default TransitionWrapper;