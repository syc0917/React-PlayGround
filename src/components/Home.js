import logo from '../logo.svg';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

function Home(props){
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                
                建立新的页面<code>src/components</code> 接着在<code>App.js</code>添加路由指向新页面, 并在<code>src/components/Home.js</code>添加<Link />Button
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