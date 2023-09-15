import {styled, createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 !important;
    padding: 0;
    background: #fff;
    font-family: Verdana, Arial, Helvetica, sans-serif;
  }
  a{
    text-decoration: none !important
  }
  .icon{
    font-size: 1.5em;
    margin: 0 .3em
  }
  .icon path{
    stroke: #555
  }

  .icon-noclick{
    fill: #fff;
    font-size: 1.5em;
    margin: 0 .3em
  }

  .icon-click{
    fill: red
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
  padding: ${props => props.$padding || "0"};
  box-sizing: ${props => props.$boxsizing || "border-box"};  
  box-shadow: ${props => props.$boxshadow || "none"};
  border-radius: ${props => props.$borderrad || "0"};
  overflow: ${props => props.$overflow || "hidden"};
  z-index: ${props => props.$zindex || "0"};
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
  min-height: ${props => props.$minheight || "max-content"};
  gap: ${props => props.$gap || "0"};
  flex-grow: ${props => props.$flexgrow || "0"};
  order: ${props => props.$order || "0"};
  background: ${props => props.$background || "#fff"};
  margin: ${props => props.$margin || "auto"};
  padding: ${props => props.$padding || "0"};
  box-sizing: ${props => props.$boxsizing || "border-box"};
  box-shadow: ${props => props.$boxshadow || "none"};
  border: ${props => props.$border || "0"};
  border-radius: ${props => props.$borderrad || "0"};
  overflow: ${props => props.$overflow || "hidden"};
  z-index: ${props => props.$zindex || "0"};
  position: ${props => props.$position || "relative"};  
`;


export const FlexibleDivContent = styled.div`
 -ms-flex: 0 0 ${props => props.$msflex || "25%"};
  flex: 0 0 ${props => props.$flex || "25%"};
  max-width: ${props => props.$maxwidth || "25%"};
  width: ${props => props.$width || "max-content"};
  height: ${props => props.$height || "max-content"};
  padding: ${props => props.$padding || "0"};
  box-sizing: ${props => props.$boxsizing || "border-box"};
  position: ${props => props.$position || "relative"};
  top: ${props => props.$top || "auto"};
  left: ${props => props.$left || "auto"};
  bottom: ${props => props.$bottom || "auto"};
  margin: ${props => props.$margin || "auto"};
  right: ${props => props.$right || "auto"};
  background: ${props => props.$background || "transparent"};
  overflow: ${props => props.$overflow || "hidden"};
  z-index: ${props => props.$zindex || "0"};

  @media (max-width: 996px) {
    -ms-flex: 0 0 ${props => props.$res9msflex || "50%"};
    flex: 0 0 ${props => props.$res9flex || "50%"};
    max-width: ${props => props.$res9maxwidth || "50%"};
  }

  @media (max-width: 767px) {
    -ms-flex: 0 0 ${props => props.$res7msflex || "100%"};
    flex: 0 0 ${props => props.$res7flex || "100%"};
    max-width: ${props => props.$res7maxwidth || "100%"};
    margin: ${props => props.$resmargin || "auto"};
  }
`;

export const ImageBox = styled.img`
  object-fit: 0 0 ${props => props.$msflex || "25%"};
  object-size: 0 0 ${props => props.$flex || "25%"};
  max-width: ${props => props.$maxwidth || "100%"};
  width: ${props => props.$width || "max-content"};
  height: ${props => props.$height || "max-content"};

  
`;

export const ImageWrap = styled.span`
  width: ${props => props.$width || "max-content"};
  height: ${props => props.$height || "max-content"}; 
  
  @media (max-width: 996px) {
    >*  {
      width: 100% !important
      };
  }
`;

export const Title = styled.h1`
  font-size: ${props => props.$fontsize || "1.5em"};
  text-align: ${props => props.$textalign || "left"};
  color: ${props => props.$color || "#333"} ;
  height: ${props => props.$height || "max-content"}; 
  line-height: ${props => props.$lineheight || "1.5"};
  margin: ${props => props.$margin || "1em"}; 
`;

export const Para = styled.p`
  font-size: ${props => props.$fontsize || "10px"};
  text-align: ${props => props.$textalign || "left"};
  color: ${props => props.$color || "#333"} ;
  margin: ${props => props.$margin || "1em"};
  line-height: ${props => props.$lineheight || "1.5"};
  font-weight: ${props => props.$fontweight || "normal"};

  @media (max-width: 767px) {
    display: ${props => props.$rdisplay || "block"};
  }
  
`;


export const Button = styled.button`
  display: inline-block;
  color: ${props => props.$color || "#fff"} ;
  font-size: ${props => props.$fontsize || "1em"};
  margin: ${props => props.$margin || "0"};
  padding: ${props => props.$padding || ".5em 1em"};
  border: ${props => props.$border || "2px solid #BE113C"}; 
  border-radius: ${props => props.$borderrad || "5px"};
  display: block;
  background: ${props => props.$background || "#BE113C"};
  width: ${props => props.$width || "max-content"};
  height: ${props => props.$height || "max-content"};
`;

export const Input = styled.input`
  color: ${props => props.$color || "#fff"} ;
  font-size: ${props => props.$fontsize || "1em"};
  margin: ${props => props.$margin || "0"};
  padding: ${props => props.$padding || ".5em 1em"};
  border: ${props => props.$border || "2px solid #fff"}; 
  border-radius: ${props => props.$borderrad || "5px"};
  display: block;
  background: ${props => props.$background || "transparent"};
  width: ${props => props.$width || "max-content"};
  height: ${props => props.$height || "max-content"};
`;



export const Anchor = styled.a`
  font-size: ${props => props.$fontsize || "10px"};
  text-align: ${props => props.$textalign || "left"};
  color: ${props => props.$color || "#BE113C"} ;
`;


export const Span = styled.span`
  width: ${props => props.$width || "max-content"};
  height: ${props => props.$height || "max-content"};
  font-size: ${props => props.$fontsize || "1.5em"};
  text-align: ${props => props.$textalign || "left"};
  color: ${props => props.$color || "#333"} ;
  line-height: ${props => props.$lineheight || "1.5"};
  margin: ${props => props.$margin || "auto"};   
`;
