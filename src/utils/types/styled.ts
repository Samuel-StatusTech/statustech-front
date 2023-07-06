import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    pallete: {
      bodybg: string;
      darkbg: string;
      projectcontent: string;
      projectLink: string;
      gradient: string;
      red: string;
      lightred: string;
    };
    text: {
      primary: string;
      lightblue: string;
      lightgrey: string;
      lightwhite: string;
    };
    containers: {
      main: string;
      mobile: string;
    };
    shadows: {
      button: string;
      dataBox: string;
    }
  }
}