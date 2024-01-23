import { createGlobalStyle } from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import reset from 'styled-reset';

const GlobalStyled = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-Regular';
    src:
        url('../assets/fonts/Pretendard-Bold.subset.woff') format('woff2'),
        url('../assets/fonts/Pretendard-Bold.subset.woff2') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard-Medium';
    src:
        url('../assets/fonts/Pretendard-Medium.subset.woff2') format('woff2'),
        url('../assets/fonts/Pretendard-Medium.subset.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard-SemiBold';
    src:
        url('../assets/fonts/Pretendard-SemiBold.subset.woff2') format('woff2'),
        url('../assets/fonts/Pretendard-SemiBold.subset.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard-Bold';
    src:
        url('../assets/fonts/Pretendard-Bold.subset.woff2') format('woff2'),
        url('../assets/fonts/Pretendard-Bold.subset.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  
  ${reset}
  * {
    box-sizing: border-box;
  }
  
  html {
    font-size: 6.25%;
  }
  
  body {
    font-size: 16rem;
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    line-height: 1.5;
    word-break: keep-all;
    word-wrap: break-word;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyled;
