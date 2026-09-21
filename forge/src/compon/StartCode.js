import { useState } from "react";

export default function StartCoding() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Start Coding Button */}
      <button 
        onClick={() => setOpen(true)} 
        className="sf-btn"
      >
        Start Coding
      </button>

      {/* Modal */}
      {open && (
        <div className="sf-overlay" onClick={() => setOpen(false)}>
          <div className="sf-modal" onClick={(e) => e.stopPropagation()}>
            <button className="sf-close" onClick={() => setOpen(false)}>
              &times;
            </button>

            <h2 className="sf-title">CodeClimb</h2>

            <p><strong>Mission:</strong> Empower learners to scale their coding skills through structured mentorship and real-world projects.</p>
            <p><strong>Services:</strong> MERN stack coaching, portfolio development, and career guidance for aspiring developers.</p>
            <p><strong>Contact:</strong> info@codeclimb.io</p>
          </div>
        </div>
      )}
    </>
  );
}
