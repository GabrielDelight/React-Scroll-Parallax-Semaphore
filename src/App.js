import "./App.css";
import { useParallax } from "react-scroll-parallax";

const App = () => {
  const scaleCParallax = useParallax({
    // rotateY: [360 ],
    scaleX: [0, 3, "easeInQuad"],
  });

  const parallaxRotateY = useParallax({
    rotateY: [0, 360],
  });

  const parallaxEasing = useParallax({
    easing: "easeOutQuad",
    translateX: [-340, 100],
  });

  const parallaxEasingLeft = useParallax({
    easing: [1, -0.75, 0.5, 1.34],
    translateX: [0, -260],
    translateY: [1100],
  });

  return (
    <div>
      <header>
        <nav>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
          <li>Register</li>
        </nav>
      </header>
      <section className="bg-container">
        <img
          ref={parallaxRotateY.ref}
          src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <div className="absolute-text">
          <h1 ref={parallaxEasing.ref}>WELCOME</h1>
          <h2 ref={parallaxEasingLeft.ref}>Get Started</h2>
        </div>
      </section>
      <br />

      <section className="card-container" ref={scaleCParallax.ref}>
        <div className="card">
          <img src="https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=800" />
          <div>
            <h2>Programming</h2>
            <p>
              Coding encourages students to think creatively and outside the box
              in order to solve problems. They can use their imagination to
              create new programs, games, or applications that will benefit
              society.
            </p>
          </div>
        </div>

        <div className="card">
          <img src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <div>
            <h2>UI and UX design</h2>
            <p>
              Critical thinking and creative problem-solving are required for UI
              and UX design. Students can use their imagination to create
              unique, aesthetically pleasing designs that captivate users..
            </p>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      
      <section className="subscribe-section">
        <p>Kinfly create an account to get started</p>
        <br />
        <button>Create an account</button>
      </section>
    </div>
  );
};
export default App;
