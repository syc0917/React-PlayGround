import logo from '../logo.svg';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

function Home(props){
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <Button>
                <Link to="/Theme">
                    Theme
                </Link>
                </Button>
                
            </header>
        </div>
    )
}

export default Home;