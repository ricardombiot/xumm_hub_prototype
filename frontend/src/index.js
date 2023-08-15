// inferno module
import {render} from 'inferno';

// routing modules
import {BrowserRouter, Switch, Link, Route} from 'inferno-router';
import {createBrowserHistory} from 'history';
import MyApp from './MyApp';
import MyHome from './MyHome';
//import JobForm from './components/job/JobForm';
import JobFormPage from './components/job/JobFormPage';
import JobPage from './components/job/JobPage';
//import QuotationPage  from './components/quotation/QuotationPage';
import HeaderMenu from './components/ui/header_menu';
import JobSearchPage from './components/job/JobSearchPage';
import UserProfileFormPage from "./components/user/UserProfileFormPage";
//import { xumm_main } from './xumm_app';

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

function JobRouter({match}) {
    return (
        <div id="job_router">
            <Switch>
                <Route path={match.url + '/new'} component={JobFormPage}/>
                <Route path={match.url + '/search'} component={JobSearchPage}/>
                <Route path={match.url + '/search/:text'} component={JobSearchPage}/>
                <Route path={match.url + '/:job_id'} component={JobPage}/>
            </Switch>
        </div>
    );
}

function User({match}) {
    return <h1>{JSON.stringify(match.params)}</h1>;
}

const routes = (
    <BrowserRouter history={browserHistory}>
        <div id="page">
            <HeaderMenu></HeaderMenu>
            <div id="space" style=""></div>
            <Switch>
                <Route exact path="/" component={MyHome}/>
                <Route path="/job" component={JobRouter}/>
                <Route path="/profile" component={UserProfileFormPage}/>
                <Route path="/users" component={Users}/>
                <Route path="*" component={NoMatch}/>
            </Switch>
        </div>
    </BrowserRouter>
);


function main(){
    console.log("ready inferno... APP");
    render(routes, document.body);
}

window.main_inferno = function(){
    main();
}
