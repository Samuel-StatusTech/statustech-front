import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    pallete: {
      bodybg: string;
      darkbg: string;
      gradient: string;
    };
    text: {
      primary: string;
      lightblue: string;
    };
    containers: {
      main: string;
      mobile: string;
    };
  }
}