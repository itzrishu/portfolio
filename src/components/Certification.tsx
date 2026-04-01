import "./styles/Certification.css";
import { FiDownload, FiAward, FiCalendar, FiUser } from "react-icons/fi";

const Certification = () => {
  const certifications = [
    {
      title: "Oracle Java Programmer",
      issuer: "Oracle Corporation",
      year: "2023",
      pdfLink: "/oracle-java-programmer.pdf",
      description: "Comprehensive Object-Oriented Programming and enterprise Java development certification",
      icon: <FiAward />,
      image: "/images/oracle-java-programmer-cert.svg",
    },
    {
      title: "GenAI with Oracle",
      issuer: "Oracle Academy",
      year: "2023",
      pdfLink: "/genai-oracle.pdf",
      description: "Advanced certification in AI, Machine Learning, and Oracle technologies",
      icon: <FiAward />,
      image: "/images/genai-oracle-cert.svg",
    },
  ];

  return (
    <div className="certification-section section-container" id="certification">
      <div className="certification-container">
        <h2>
          <span>CERTIFICATIONS</span>
        </h2>

        <div className="certification-grid">
          {certifications.map((cert, index) => (
            <div className="certification-card" key={index}>
              <div className="certification-badge">
                <span className="badge-number">{String(index + 1).padStart(2, "0")}</span>
              </div>

              {/* Certificate Image */}
              <div className="certification-image">
                <img
                  src={cert.image}
                  alt={`${cert.title} Certificate`}
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    (e.target as HTMLImageElement).src = "/images/placeholder.webp";
                  }}
                />
              </div>

              <div className="certification-content">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ color: '#14b8a6', fontSize: '24px' }}>{cert.icon}</span>
                  <h4>{cert.title}</h4>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '5px' }}>
                  <FiUser style={{ color: '#14b8a6', fontSize: '14px' }} />
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '15px' }}>
                  <FiCalendar style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }} />
                  <p className="cert-year">{cert.year}</p>
                </div>

                <p className="cert-description">{cert.description}</p>

                <a
                  href={cert.pdfLink}
                  download
                  className="cert-download-btn"
                  title="Download Certificate PDF"
                >
                  <FiDownload />
                  Download Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certification;
