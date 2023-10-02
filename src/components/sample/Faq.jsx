import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";

const personalFaq = [
  {
    question: "Question 1",
    answer: "Answer 1 ",
  },
  {
    question: "Question 2",
    answer: "Answer 2",
  },
  {
    question: "Question 3",
    answer: "Answer 3",
  },
  {
    question: "Question 4",
    answer: "Answer 4",
  },
  {
    question: "Question 5",
    answer: "Question 5",
  },
];

const Faq = () => {
  const [activeQuestionId, setActiveQuestionId] = useState(null);

  return (
    <Container>
      <Container>
        <Container>
          <h1>FAQ</h1>
          <Row>
            {personalFaq.map(({ id, question, answer }) => (
              <div key={id}>
                <p>
                  <span onClick={() => setActiveQuestionId(id)}>
                    <i
                      className={`fas ${
                        activeQuestionId === id
                          ? "fa-angle-up"
                          : "fa-angle-down m-1"
                      }`}
                    ></i>
                  </span>
                  {question}
                </p>
                {activeQuestionId === id && <p>{answer}</p>}
              </div>
            ))}
          </Row>
        </Container>
      </Container>
    </Container>
  );
};

export default Faq;
