import React from 'react';
import * as S from './style';

interface StandFirstProps {
  children: React.ReactNode;
}

const StandFirst = ({ children }:StandFirstProps) => {
  return (
    <S.StandFirst>
      {children}
    </S.StandFirst>
  )
};

export default StandFirst;