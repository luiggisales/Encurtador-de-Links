import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/home';
import Links from './pages/links';
import ErrorNotFound from './components/404';
export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/meuslinks' element={<Links/>}/>
                <Route path='*' element={<ErrorNotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
};
