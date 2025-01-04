import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Education from './Education';
import Projects from './Projects';
import Header from './Header';

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/education" component={Education} />
            </Switch>
        </BrowserRouter>
    )
}
export default Router;