import { styled } from 'grommet';
import { MainContainer, SmMargin, ActionDiv } from './styles';


export const MainContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SmMargin = styled.div`
  margin: ${props => props.theme.spacing[1]};
`;

export const ActionDiv = styled.div`
  text-align: center;
`;
