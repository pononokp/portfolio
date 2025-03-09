import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './views/not-found';
import Root from './views/root';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route
                path="/"
                element={<Root />}
            />
            <Route
                path="/404"
                element={<NotFound />}
            />
        </Routes>
    </BrowserRouter>
);

export default App;
