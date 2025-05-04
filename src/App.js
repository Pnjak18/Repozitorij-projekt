import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'leaflet/dist/leaflet.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Careers from './components/pages/careers/Careers';
import Blog from './components/pages/blog/Blog';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import BlogSingle from './components/pages/blog/BlogSingle';
import Login from './components/pages/login/Login';
import Signup from './components/pages/signup/Signup';
import ScrollToTop from "./components/ScrollToTop";





function App() {
  return (
    <Router>
      {/* Green Dots Background Image OUTSIDE of .App */}
      <img
        src="img/greendots-pattern.png"
        alt="Green Dots"
        className="green-dots-bg"
      />

      <div className="App">
        <Header />
       
      <ScrollToTop />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Blog/:id" element={<BlogSingle />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
