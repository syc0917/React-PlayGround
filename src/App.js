
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Home from './components/Home.js'
import Theme from './components/Theme.js'
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { light } from "./theme";

function App() {
  return (
    <>
    <ThemeProvider theme={light}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Router>
        <Switch>
          <Route path={"/"} render={()=><Home />} exact/>
          <Route path={"/Theme"} render={()=><Theme />} />
        
        
        
        </Switch>
      </Router>
    </ThemeProvider>
    </>
    
  );
}

export default App;
