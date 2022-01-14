import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: string,
    backgroundColor: string,
    fontColor: string,
    colors: {
      primary: string,
      secondary: string,
      info: string,
      warning: string,
      danger: string,
      success: string,
      light: string,
      dark: string,
      buttonToogleIcon: string,
      link: string,
      border: string,
      navBackground: string,
      boxShadow: string
    },
    gradients: {
      one: string
    }
  }
}
