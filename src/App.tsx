import "./App.scss";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import PageHeader from "./components/PageHeader/PageHeader";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <PageHeader />
      <Hero />
      <About />
      <Portfolio />
    </>
  );
}

export default App;
