import { Link } from "react-router-dom";
import Button from "../components/Button";
import "../styles/aboute.css";
const Aboute = () => {
    return (
        <div class="container">
        <h1>About Us - [Ajar]</h1>

            <p>Welcome to [Ajar]! We are a team of aspiring Java
                developers – Mohammad Abbas, Mohammed Akguna, and Hassan
                Alomar – driven by a shared passion for
                creating practical and innovative solutions.</p>

        <h2>Our Mission</h2>
            <p>We recognized the challenges individuals face when
                trying to find and book vacant rooms and living spaces.
                Our mission is to simplify this process by providing a
                user-friendly and efficient platform that connects people
                with available accommodations seamlessly.</p>

        <h2>Meet the Team</h2>

        <div class="team-member">
            <h3>[Mohammad Abbas]</h3>
            <p>As a budding Java developer, I'm focused on  backend logic, database management. I'm excited to leverage my skills to build a valuable tool for users.</p>
        </div>

        <div class="team-member">
            <h3>Mohammed Akguna</h3>
                <p>Mohammed brings  user interface design, API integration. His dedication to
                    clean code or user experience is crucial to our project's success.</p>
        </div>

        <div class="team-member">
            <h3>Hassan Alomar</h3>
                <p>Hassan's expertise lies in  testing and quality assurance,
                    front-end development. His commitment to [mention a positive quality, e.g., detail-oriented work or problem-solving] ensures a robust and reliable platform.</p>
        </div>

        <h2>Our Goal</h2>
        <p>Our primary goal is to develop a reliable and convenient service that makes finding and booking living spaces straightforward and stress-free. We are dedicated to continuously improving [Your Project Name] and providing a valuable resource for our users.</p>

            <p>Thank you for visiting Ajar! We appreciate your interest in our project and are excited about its potential.</p>
            
            <Link to={"7home"}>home</Link>
        </div>  
        
    );
}
export default Aboute;