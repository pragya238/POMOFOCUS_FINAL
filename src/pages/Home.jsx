import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <div className="blob"></div>
  <div className="blob"></div>

  <section className="hero">
    <h1 className="hero-title">Stay Focused, Stay Productive.</h1>
    <p className="hero-subtitle">
      The minimalist Pomodoro timer built for high-performing minds.
    </p>
    <Link to="/timer" className="hero-btn">Start Timer</Link>
  </section>
  <svg className="waves" viewBox="0 0 1440 320">
    <path fill="#ffffffaa" fillOpacity="1"
      d="M0,160L40,149.3C80,139,160,117,240,133.3C320,149,400,203,480,213.3C560,224,640,192,720,186.7C800,181,880,203,960,218.7C1040,235,1120,245,1200,213.3C1280,181,1360,107,1400,69.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
    </path>
  </svg>
    </div>
  );
}

export default Home;
