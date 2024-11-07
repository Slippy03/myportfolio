import flutter from "../assets/img/flutter.svg"
import firebase from "../assets/img/firebase.svg"
import python from "../assets/img/python.svg"
import react from "../assets/img/react.svg"
import sql from "../assets/img/sql.svg"
import dart from "../assets/img/dart.svg"
import html5 from "../assets/img/html5.svg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>These are my foundational knowledge of the tools and languages , I can use them effectively to build and enhance my projects.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={sql} alt="Image" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={flutter} alt="Image" />
                                <h5>Flutter</h5>
                            </div>
                            <div className="item">
                                <img src={html5} alt="Image" />
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={dart} alt="Image" />
                                <h5>Dart</h5>
                            </div>
                            <div className="item">
                                <img src={firebase} alt="Image" />
                                <h5>Firebase</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
