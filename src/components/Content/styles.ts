import styled from 'styled-components';

export const ContentContainer = styled.main`
  grid-area: Content;
  width: 100%;
  justify-self: center;
`;

export const Border = styled.span`
  width: 100%;
  display: block;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;
