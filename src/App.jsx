import Hero from './components/Hero';
import Demo from './components/Demo';
import './App.css';
import Footer from './components/Footer';

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app min-h-[calc(100vh_-_32px)]'>
        <Hero />
        <Demo />
      </div>

      <Footer />
    </main>
  );
};

export default App;
