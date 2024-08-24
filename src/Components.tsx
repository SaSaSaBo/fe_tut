import styled, { css } from "styled-components";

// The Title component is updated to accept the "theme" prop
interface TitleProps {
  theme?: string; // added optional 'theme' prop
}

export const Title = styled.h1<TitleProps>`
  font-size: 3em;
  font-weight: 500;
  text-decoration: underline;
  ${({ theme }) =>
    theme === "dark" &&
    css`
      background: #000;
      color: #fff;
      &:hover {
        background: green;
      }
    `}
`;

// Components code are different then the tutorial video Cause i use typescript instead of javascript. In the video:
    // ${props => props.theme.mode === 'dark' && css `
    //     background: #000;   
    //     color: #fff;
    // `}
// And here is no interface.