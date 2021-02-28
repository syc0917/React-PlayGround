import logo from '../logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    link: {
        color: 'white',
        textDecoration: 'none'
    }
}));

function Home(props){
    const classes = useStyles();
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                
                在<code>src/components</code>建立新的页面, 接着在<code>App.js</code>添加路由指向新页面, 并在<code>src/components/Home.js</code>添加<Link />Button.
                </p>
                <Button>
                    <Link className={classes.link} to="/Theme">
                        Theme
                    </Link>
                </Button>
                <Button>
                    <Link className={classes.link} to="/Apexcharts">
                    Apexcharts
                    </Link>
                </Button>
                
            </header>
        </div>
    )
}

export default Home;