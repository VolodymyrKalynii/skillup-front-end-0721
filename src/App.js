import logo from './logo.svg';
import './App.css';
import {Checkbox} from './components';
import {Routes, Route, Outlet, Link, HashRouter} from 'react-router-dom';

const pathConfig = {
    root: '/',
    comments: 'comments'
}

function App() {
  return (
      <HashRouter>
          <Routes>
              <Route path={pathConfig.root} element={<Nav   />}>
                  <Route index element={<div>main</div>} />
                  <Route path={pathConfig.comments} element={<div>comments<img src={logo} className="App-logo" alt="logo" /></div>} />
              </Route>
          </Routes>
      </HashRouter>
  );
}

const Nav = () => (
  <div>
      <div>
          <Link to={pathConfig.root}>root</Link>
          <Link to={pathConfig.comments}>comments</Link>
      </div>

      <Outlet/>
  </div>
);

export default App;
