import * as React from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { ScrollContainer, ScrollIcon, Wheel } from "./styles";
import { inDown } from "@animations";

interface ScrollHintProps { };

const ScrollHint: React.FC<ScrollHintProps> = () => {
  const [hideOnScroll, setHideOnScroll] = React.useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    setHideOnScroll(currPos.y < -50 ? true : false);
  }, [hideOnScroll]);

  return (
    <ScrollContainer initial="initial" animate="animate" hide={hideOnScroll}>
      <ScrollIcon variants={inDown} aria-hidden="true">
        <Wheel />
      </ScrollIcon>
    </ScrollContainer>
  )
}

export default ScrollHint;