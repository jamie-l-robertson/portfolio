import * as React from 'react';
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Icon from "@components/icon";
import { BackToTopButton } from './styles';

interface BackToTopProps {
  animate: boolean
  scrollType: string
  offset: number
};

const BackToTop: React.FC<BackToTopProps> = ({ animate = false, scrollType = "smooth", offset = 0, ...props }) => {
  const [showOnScroll, setShowOnScroll] = React.useState(true)

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: scrollType
    });
  }

  useScrollPosition(({ prevPos, currPos }) => {
    const isShow = currPos.y < prevPos.y;
    if (isShow !== showOnScroll) setShowOnScroll(isShow);
  }, [showOnScroll]);

  return (
    <BackToTopButton onClick={handleClick} type="button" show={showOnScroll} {...props}>
      <Icon name="ArrowUpCircle" title="Back to top" size={35} />
    </BackToTopButton>
  )

};

export default BackToTop;