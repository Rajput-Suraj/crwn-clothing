import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/Shop";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/shop" component={ShopPage} />
                <Route exact path="/signin" component={SignInAndSignUp} />
            </Switch>
        </div>
    );
}

export default App;
