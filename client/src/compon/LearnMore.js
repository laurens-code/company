import { useState } from "react";

export default function LearnMore() {
    //is the pop up visibile, change whether the pop up is visible - dfeault is not visible
    const [ open, setOpen] = useState(false);

    return(
        <>
          <button
          onClick={()=> setOpen(true)}
          className="sf-btn"
          > 
        Laern More
    </button>

    {/* //the pop-up itself  */}
  {open && (
        <div className="sf-overlay" onClick={() => setOpen(false)}>
          <div className="sf-modal" onClick={(e) => e.stopPropagation()}>
            <button className="sf-close" onClick={() => setOpen(false)}>
              &times;
            </button>

     <h2 className="sf-title">MentorBridge</h2>

<p><strong>Mission:</strong> MentorBridge connects learners with experienced mentors who guide them through real technical growth — from foundational skills to career‑ready confidence.</p>

<p><strong>What We Provide:</strong> Personalized tutoring, structured study plans, hands‑on project support, and career mentoring for individuals entering or advancing in tech fields such as technical support, MERN stack development, and open‑source contribution.</p>

<p><strong>How We Help:</strong> We bridge the gap between learning and doing by offering practical guidance, portfolio‑building opportunities, and direct support tailored to each learner’s goals.</p>

<p><strong>Contact:</strong> support@mentorbridge.io</p>
          </div>
        </div>
      )}
        </>
    );
}