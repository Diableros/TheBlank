import { css, Global, useTheme } from '@emotion/react'

const GlobalCSS = () => {
  const theme = useTheme()

  return css`
    :root {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans',
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
      line-height: 1.5;
      font-weight: 400;

      color: ${theme.colors.textPrimary};
    }

    * {
      margin: 0;
    }

    body {
      display: grid;

      min-height: 100vh;
      min-width: 100vw;

      place-content: center;
    }

    h1 {
      margin: 0;
      font-size: 2rem;
      line-height: 1.5;
      font-weight: 400;
    }
  `
}

export const GlobalStyles = () => <Global styles={GlobalCSS()} />
