import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    pallete: {
      bodybg: string;
      gradient: string;
    };
    text: {
      primary: string;
    };
    containers: {
      main: string;
    };
  }
}