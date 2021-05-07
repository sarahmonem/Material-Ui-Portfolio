import "./App.css";
import Header from "./Header";
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
  ThemeProvider
} from "@material-ui/core/styles";
import Cards from "./Cards";
import { amber } from "@material-ui/core/colors";
import AccordionSection from "./AccordionSection";
import { Container } from "@material-ui/core";
import Services from "./Services";

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Oswald" , sans-serif'
  },
  palette: {}
});
const useStyles = makeStyles(theme => {
  return {
    root: {}
  };
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Container>
          <Header />
          <Cards />
          <Services />
          <AccordionSection />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
