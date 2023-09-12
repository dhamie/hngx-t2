import {styled, createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #fff;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export const FlexibleDiv = styled.div`
  display: flex;
  justify-content: ${props => props.$justifycontent || "center"};
  align-items: ${props => props.$alignitems || "center"};
  flex-wrap: ${props => props.$flexWrap || "wrap"};
  flex-direction: ${props => props.$flexdir || "row"};
  width: ${props => props.$width || "max-content"};
  height: ${props => props.$height || "max-content"};
  max-width: ${props => props.$maxwidth || "100%"};
  gap: ${props => props.$gap || "0"};
  flex-grow: ${props => props.$flexgrow || "0"};
  order: ${props => props.$order || "0"};
  background: ${props => props.$background || "#fff"};
  margin: ${props => props.$margin || "auto"};
  padding: ${props => props.$padding || "auto"};
  box-sizing: ${props => props.$boxsizing || "border-box"};
`;

export const FlexibleDiv1 = styled.div`
  display: flex;
  justify-content: ${props => props.$justifycontent || "center"};
  align-items: ${props => props.$alignitems || "center"};
  flex-wrap: ${props => props.$flexWrap || "wrap"};
  flex-direction: ${props => props.$flexdir || "row"};
  width: ${props => props.$width || "max-content"};
  height: ${props => props.$height || "max-content"};
  max-width: ${props => props.$maxwidth || "100%"};
  gap: ${props => props.$gap || "0"};
  flex-grow: ${props => props.$flexgrow || "0"};
  order: ${props => props.$order || "0"};
  background: ${props => props.$background || "#fff"};
  margin: ${props => props.$margin || "auto"};
  padding: ${props => props.$padding || "auto"};
  box-sizing: ${props => props.$boxsizing || "border-box"};
`;


export const FlexibleDivContent = styled.div`
 -ms-flex: 0 0 ${props => props.$msflex || "25%"};
  flex: 0 0 ${props => props.$flex || "25%"};
  max-width: ${props => props.$maxwidth || "25%"};
`;