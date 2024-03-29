
import './App.css';
import SideBar from './components/SideBar';
import  Feed  from './components/Feed';
import  Widgets  from './components/Widgets';

function App() {
  return (
    // BEM
    <div className="app">

      {/* Sidebar */}
      <SideBar/>

      {/* Feed */}
      <Feed/>

      {/* Widgets */}
      <Widgets/>
    </div>
  );
}

export default App;
