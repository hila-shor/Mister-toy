import './assets/style/style.scss'
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store/store';
import { AppHeader } from './cmps/app-header';
import { AboutUs } from "./pages/about-us";
import { HomePage } from "./pages/home-page";
import { ToyIndex } from "./pages/toy-index";
import { UserMsg } from "./cmps/user-msg";
import { ToyDetails } from "./pages/toy-details";
import { Dashboard } from "./pages/dashboard";
import { LoginSignup } from './pages/login-signup';

export function App() {

    return (
        <Provider store={store}>
            <Router>
                <section >
                    
                    <AppHeader />
                    <main>
                            <Routes>
                                <Route element={<HomePage />} path="/" />
                                <Route element={<AboutUs />} path="/about" />
                                <Route element={<ToyIndex />} path="/toy" />
                                <Route element={<ToyDetails />} path="/toy/:toyId" />
                                <Route element={<Dashboard />} path="/dashboard"/>
                                <Route element={<LoginSignup/>} path="/login-signup"/>
                            </Routes>
                        </main>
                        <UserMsg />
                </section>
            </Router>
        </Provider>
    )
}                           
