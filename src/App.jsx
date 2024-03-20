import Button from './components/Button';
import Alert from './components/Alert'
import NavBar from "./components/NavBar";
import {Fragment, useState} from "react";
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Upload from "./components/Upload";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import CMS from "./components/CMS";
import Chat from "./components/Chat";
import AdminPage from "./components/AdminPage";
import CustomerPage from "./components/CustomerPage";
import SignAdmin from "./components/SignAdmin";
import Search from "./components/Search";
import Feedback from "./components/Feedback";
import Landing from "./components/Landing";

function App() {

    const [alertVisible, setAlertVisibility] = useState(false);

    return (
        <Router>
            <div>
                <NavBar/>
            </div>

            <div>
                <Switch>
                    <Route exact path="/">
                        {/*{alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}*/}
                        {/*<Button colour="success" onClick={() => setAlertVisibility(true)}>My Button</Button>*/}
                        <Landing/>
                    </Route>
                    <Route  path="/signup">
                        <SignUp/>
                    </Route>
                    <Route  path="/signin">
                        <SignIn/>
                    </Route>
                    <Route  path="/admin">
                        <SignAdmin/>
                    </Route>
                    <Route path="/upload">
                        <Upload/>
                    </Route>
                    <Route path={"/CMS"}>
                        <CMS/>
                    </Route>
                    <Route path={"/chat"}>
                        <Chat/>
                    </Route>
                    <Route path={"/admin-page"}>
                        <AdminPage/>
                    </Route>
                    <Route path={"/customer-page"}>
                        <CustomerPage/>
                    </Route>
                    <Route path={"/search"}>
                        <Search/>
                    </Route>
                    <Route path={"/feedback"}>
                        <Feedback/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;