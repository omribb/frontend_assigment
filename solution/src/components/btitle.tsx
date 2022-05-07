import styled from "styled-components";

export const BTitle = styled.div`
  color: ${(props): string => props.theme.colors.accentColor};
  font-size: 32px;
  font-weight: 600;
  text-transform: uppercase;
`;


export const BTitleRegularColor = styled(BTitle)`
  color: ${(props): string => props.theme.colors.main};
`;
