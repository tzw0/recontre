import './App.scss';
import Topbar from './components/topbar/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="page">
        <div className="row expand">
          <div className="col">
            <h1 id="home">Recontre</h1>
            <h2>Browse •  Discover •  Plan</h2>
            <h3>UI/UX Design - Mobile Application</h3>
          </div>
          <div>
            <img src="assets/cover.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;