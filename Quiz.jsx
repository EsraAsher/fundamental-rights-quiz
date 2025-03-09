import React, { useState } from "react";

const questions = [
  {
    question: "Which part of the Indian Constitution deals with Fundamental Rights?",
    options: ["Part II", "Part III", "Part IV", "Part V"],
    answer: "Part III",
  },
  {
    question: "Fundamental Rights in India are borrowed from which country's constitution?",
    options: ["France", "United States", "Canada", "United Kingdom"],
    answer: "United States",
  },
  {
    question: "Which Fundamental Right is known as the 'Heart and Soul of the Constitution'?",
    options: ["Right to Equality", "Right to Freedom", "Right to Constitutional Remedies", "Right to Education"],
    answer: "Right to Constitutional Remedies",
  },
  {
    question: "Which article of the Indian Constitution provides equality before the law and equal protection of laws?",
    options: ["Article 12", "Article 14", "Article 19", "Article 21"],
    answer: "Article 14",
  },
  {
    question: "Untouchability is abolished under which Article?",
    options: ["Article 15", "Article 16", "Article 17", "Article 18"],
    answer: "Article 17",
  },
  {
    question: "The Supreme Court ruling in the Maneka Gandhi case (1978) expanded the scope of which Article?",
    options: ["Article 14", "Article 19", "Article 21", "Article 32"],
    answer: "Article 21",
  },
  {
    question: "Which of the following writs is issued to release a person from unlawful detention?",
    options: ["Mandamus", "Certiorari", "Habeas Corpus", "Prohibition"],
    answer: "Habeas Corpus",
  },
  {
    question: "The Right to Education was made a Fundamental Right under which amendment?",
    options: ["42nd Amendment", "44th Amendment", "86th Amendment", "73rd Amendment"],
    answer: "86th Amendment",
  },
  {
    question: "Which Article guarantees the Right to Constitutional Remedies?",
    options: ["Article 19", "Article 20", "Article 31", "Article 32"],
    answer: "Article 32",
  },
  {
    question: "The doctrine of 'Eminent Domain' was curtailed by which Constitutional Amendment?",
    options: ["1st Amendment", "42nd Amendment", "44th Amendment", "86th Amendment"],
    answer: "44th Amendment",
  }
];

export default function Quiz() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionChange = (index, option) => {
    const newAnswers = [...answers];
    newAnswers[index] = option;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let newScore = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].answer) newScore++;
    });
    setScore(newScore);
    setSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Fundamental Rights Quiz</h1>
      {questions.map((q, index) => (
        <div key={index} className="mb-4 p-4 bg-white shadow rounded-lg">
          <p className="font-semibold">{index + 1}. {q.question}</p>
          {q.options.map((option) => (
            <label key={option} className="block mt-2">
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                checked={answers[index] === option}
                onChange={() => handleOptionChange(index, option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      {!submitted ? (
        <button
          onClick={handleSubmit}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      ) : (
        <p className="mt-4 text-xl font-semibold">Your Score: {score} / {questions.length}</p>
      )}
    </div>
  );
}
