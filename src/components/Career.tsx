import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Web Developer</h4>
                <h5>E-Commerce Platform • Food Mood</h5>
              </div>
              <h4>April 2025</h4>
            </div>
            <p>
              Developed a full-stack e-commerce web application for a local food
              business, enabling seamless online ordering, menu browsing, and
              real-time order tracking. Built a secure backend using Node.js and
              MongoDB for orders, user management, and inventory.
            </p>
            {/* <p>
              Designed a responsive, user-friendly UI with HTML, CSS, JavaScript,
              and Tailwind CSS. Implemented authentication and role-based access
              control (JWT) to secure transactions and admin features.
            </p> */}
            {/* <p>
              Enhanced engagement with cart system, order history, and dynamic
              product display. Tech Stack: Node.js, MongoDB, HTML, CSS,
              JavaScript, Tailwind CSS, JWT.
            </p> */}
          </div>
          {/* <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Full Stack Developer</h4>
                <h5>Monocept (Max Life Insurance)</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Led two development teams on Mpro, a large-scale insurance
              operations platform. Developed multiple modules using React.js &
              migrated critical functionalities to Node.js microservices.
            </p>
          </div> */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Logic Loop</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building Solid, a proprietary low-code platform using Angular,
              Next.js & NestJS. Delivering production-ready CMS-based projects
              including e-commerce, CRM, and import-export automation systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
