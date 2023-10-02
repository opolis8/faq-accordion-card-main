import { useState, useEffect } from "react";
import "./content.scss";
import Answer from "../answer/Answer";

let data = [
  {
    id: 1,
    question: "How many members can I invite",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    id: 2,
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    id: 3,
    question: " How do I reset my password?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    id: 4,
    question: " Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    id: 5,
    question: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

function Content() {
  const [show, setShow] = useState("");
  const [showbtn, setShowbtn] = useState(false);

  return (
    <div className="content">
      <div className="title">FAQ</div>
      <div className="inside">
        {data.map((data) => (
          <div className="questions " key={data.id}>
            <div className="data">
              <div
                className={`question ${
                  showbtn && show === data.id ? "bold" : null
                }`}
                onClick={() => {
                  setShowbtn(!showbtn);
                  setShow(data.id);
                }}
              >
                {data.question}
              </div>
              {showbtn && show === data.id && (
                <div className="answer">{data.answer}</div>
              )}
            </div>

            <button
              onClick={() => {
                setShowbtn(!showbtn);
                setShow(data.id);
              }}
            ></button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Content;
