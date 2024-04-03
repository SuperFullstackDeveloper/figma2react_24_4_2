import Header from "./component/layouts/Header";
import Footer from "./component/layouts/Footer";
import Home from './component/pages/Home';
import "bootstrap/dist/css/bootstrap.min.css"

const App = ()=> {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
