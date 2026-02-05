import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ScrollProgress from './components/ScrollProgress';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import { ThemeProvider } from './contexts/ThemeContext';


const AnimatedBackground = lazy(() => import('./components/AnimatedBackground'));
// ... imports

function App() {
  return (
    <ThemeProvider>
      <div className="main-container min-h-screen relative bg-background">
        <Suspense fallback={null}>
          <AnimatedBackground />
        </Suspense>
        <ScrollProgress />
        <Header />
        <main className="relative z-10">
          <Hero />
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={<div className="h-20 bg-black" />}>
          <Footer />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;