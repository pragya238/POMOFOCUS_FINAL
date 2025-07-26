import './About.css';

function About() {
return (
<section className="about">
    <div className="about-container">
    <h1 className="about-title">About <span>PomoFocus</span></h1>
    <p className="about-text">
        <strong>PomoFocus</strong> is your personal productivity companion built around the Pomodoro Technique. 
        It helps you work with focus, manage your time effectively, and avoid burnout through structured work and break intervals.
    </p>
    <p className="about-text">
        Whether you're a student, developer, or creative professional, PomoFocus is designed to boost your efficiency 
        while keeping things simple and visually refreshing.
    </p>
    <p className="about-tagline">
        Stay focused. Stay balanced. Stay productive.
    </p>
    </div>
</section>
  );
}


export default About;
