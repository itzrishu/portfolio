import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "1. Food Mood",
    category: "Online Food Delivery Platform",
    tools: "Node.js, MongoDB, HTML, CSS, Tailwind CSS, JavaScript",
    description:
      "Food Mood is an online food delivery platform designed for a local restaurant, enabling customers to easily order their favorite meals online.\n\nThe project includes a user-friendly website with features such as an interactive menu, easy ordering system, real-time order tracking,\n\n secure payment options, and customer reviews.\n\nAdditionally, the platform offers special deals, personalized recommendations, and a user account for order history and saving favorites.\n\n The project aims to enhance the restaurant's online presence and provide a seamless food ordering experience for users.",
    image: "/images/radix.png",
  },
  {
    title: "2. Library Management System",
    category: "Web-based Library Management",
    tools: "HTML, CSS, JavaScript, PHP, MySQL",
    description:
      "A web-based Library Management System designed to efficiently manage book records, issue/return processes, and user data.\n\nThe system simplifies library operations by digitizing manual tasks and improving accessibility for both students and administrators.",
    image: "/images/bond.png",
  },
  {
    title: "3. Edu Path  Student Progress Tracker App",
    category: "Student Progress Tracking",
    tools: "React, HTML, CSS, JavaScript, Node.js, MongoDB",
    description:
      "Edu Path is a student progress tracking application that helps monitor academic performance and learning progress.\n\nIt provides insights into student achievements, attendance, and subject-wise performance to support better decision-making.",
    image: "/images/Solidx.png",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-description">
                          {project.description.split('\n\n').map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                          ))}
                        </div>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
