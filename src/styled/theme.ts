import { DefaultTheme } from "styled-components"

const theme: DefaultTheme = {
  pallete: {
    bodybg: 'rgba(27, 29, 31, 1)',
    darkbg: 'rgba(23, 25, 26, 1)',
    gradient: 'linear-gradient(102.38deg, #00F800 -35.84%, #00D6EE 104.25%)'
  },
  text: {
    primary: 'rgba(255, 255, 255, 1)',
    lightblue: 'rgba(0, 214, 238, 1)',
    lightgrey: 'rgba(144, 161, 165, 1)',
    lightwhite: 'rgba(225, 236, 239, 1)'
  },
  containers: {
    main: "65px",
    mobile: "15px"
  },
  shadows: {
    button: '0px 20px 20px -20px rgba(0, 214, 238, 0.3)',
    dataBox: '0px 50px 100px -45px rgba(0, 214, 238, 0.15)',
  }
}


export default theme