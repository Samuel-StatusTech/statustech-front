import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    pallete: {
      bodybg: string;
    };
    text: {
      primary: string;
    };
  }
}