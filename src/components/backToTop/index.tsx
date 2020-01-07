import * as React from 'react';
import Icon from "@components/icon";

interface BackToTopProps {
  animate: boolean
  scrollType: string
};

const BackToTop: React.FC<BackToTopProps> = ({ animate = false, scrollType = "smooth" }) => {

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: scrollType
    });
  }


  return (
    <button onClick={handleClick} type="button">
      <Icon name="ArrowUpCircle" title="Back to top" />
    </button>
  )

};

export default BackToTop;