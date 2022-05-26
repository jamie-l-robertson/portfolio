import * as React from 'react';
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Icon from "@components/icon";
import * as S from './styles';

interface BackToTopProps {
  iconName: string
  scrollType: ScrollBehavior | undefined
  show: boolean
};

const BackToTop: React.FC<BackToTopProps> = ({
  scrollType = "smooth",
  iconName = "ArrowUpCircle",
  ...rest
}) => {

  const [showOnScroll, setShowOnScroll] = React.useState(false);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: scrollType
    });
  }

  useScrollPosition(({ prevPos, currPos }) => {
    const windowOffset = window.pageYOffset - window.innerHeight;
    const isShow = currPos.y < prevPos.y && currPos.y < windowOffset;

    if (isShow !== showOnScroll) setShowOnScroll(isShow);
  }, [showOnScroll]);

  return (
    <S.BackToTopButton onClick={handleClick} type="button" show={showOnScroll} aria-label="Back to top" {...rest}>
      <Icon name={iconName} title="Back to top" size={35} />
    </S.BackToTopButton>
  );

};

export default BackToTop;
