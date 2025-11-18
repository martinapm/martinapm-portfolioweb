import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Tools from "./pages/Tools";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-[#1a0a0a] to-black text-white font-body">

            <Navbar />

            <main className="pt-32">
                <Home />
                <About />
                <Education />
                <Tools />
                <Projects />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}

export default App;
