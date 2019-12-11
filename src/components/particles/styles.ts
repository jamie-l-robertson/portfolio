import styled from 'styled-components'
import Particles from 'react-particles-js';

const StyledParticles = styled(Particles)`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
  width: 100%;
  height: 100%;
`;

export { StyledParticles }