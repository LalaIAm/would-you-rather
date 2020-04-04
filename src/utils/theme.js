import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiCard: {
      zIndex: 0,
    },
  },
  palette: {
    primary: {
      main: "#c21858",
    },
    secondary: {
      main: "#00bcd4",
    },
  },
  typography: {
    fontFamily: "Oswald",
    h1: {
      fontFamily: "Spicy Rice",
      fontSize: "3.5rem",
    },
    h2: {
      fontFamily: "Spicy Rice",
    },
    h3: {
      fontSize: '2.3rem',
      fontFamily: 'Oswald'
    },
    h4: {
      fontFamily: 'Spicy Rice',
      fontSize: '2rem'
    },
    body1: {
      fontFamily: "Oswald",
    },
    body2: {
      fontFamily: 'Spicy Rice'
    },
  },
});

export default theme;
