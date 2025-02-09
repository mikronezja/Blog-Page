import { BrowserRouter, Routes, Route } from "react-router-dom"; // Fixed imports
import Links from "./components/Links"; // Import your custom Links component
import Licznik from "./components/Licznik";
import Home from "./components/Home";
import BlogsPage from "./components/BlogsPage";
import Blog from "./components/Blog";
import Create from "./components/Create";
import NotFound from "./components/NotFound";
import { GlobalStyles } from "./Styles/GlobalStyle";
import { Navbar, Shine } from "./Styles/Navbar";
import "./App.css";
import { FlowerStyle } from "./Styles/FlowerStyle";
import Lamps from "./components/Lamps";
import Footer from "./components/Footer";
import Shimmer from "./components/Shimmer";
import MainPageDecor from "./components/MainPageDecor";

function App() {
  return (
    <BrowserRouter>
      {/* <Licznik /> */}
      <GlobalStyles />

      <div style={{ position: "relative" }}>
        <Shine left="0vw" height="15vh" xstart="26vw" xend="75vw" />
        <Navbar>
          <FlowerStyle src="images/kwiatuszek.png" />
          <Links
            items={[
              { url: "/", desc: "Home" },
              { url: "/blog", desc: "Blogs" },
              { url: "/create", desc: "Create article" },
            ]}
          />
          <FlowerStyle src="images/kwiatuszek.png" />
        </Navbar>
      </div>

      <MainPageDecor />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogsPage />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/create" element={<Create />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
