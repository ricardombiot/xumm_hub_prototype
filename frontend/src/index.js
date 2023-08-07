// inferno module
import {render} from 'inferno';

// routing modules
import {BrowserRouter, Switch, Link, Route} from 'inferno-router';
import {createBrowserHistory} from 'history';
import MyApp from './MyApp';
import VersionComponent from './VersionComponent.js';
import MyHome from './MyHome';

const browserHistory = createBrowserHistory();

function App({children}) {
    return (
        <div>
            <h1>Application</h1>
            {children}
        </div>
    );
}

function NoMatch({children, params}) {
    return <div>no match</div>;
}

function Home({children}) {
    return <div>home</div>;
}

// `children` in this case will be the `User` component
function Users({match}) {
    return (
        <div>
            <h2>user list</h2>
            <Route path={match.url + '/user/:username'} component={User}/>
        </div>
    );
}

function User({match}) {
    return <h1>{JSON.stringify(match.params)}</h1>;
}

const routes = (
    <BrowserRouter history={browserHistory}>
        <div>
            <h1>Application</h1>
            <Switch>
                <Route exact path="/" component={MyHome}/>
                <Route path="/users" component={Users}/>
                <Route path="/my-app" component={MyApp}/>
                <Route path="*" component={NoMatch}/>
            </Switch>
        </div>
    </BrowserRouter>
);

render(routes, document.getElementById('app'));
