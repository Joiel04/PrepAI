"use client";
import { useState } from "react";
import {useRouter} from "next/navigation";

export default function Questions() {
//   const params = await searchParams;
  const questions = ["Tell me about yourself.",
    "What is JavaScript?",
    "What is the difference between let and const?",];

  const [currentQuestion , setCurrentQuestion] = useState(0);
  const [currentAnswer , setCurrentAnswer] = useState("");
  const [answers , setAnswers] = useState([]);
  const router = useRouter();


  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* <h1 className="text-4xl font-bold">
        Interview Questions
      </h1>

      <p className="mt-4">
        Role: {params.role}
      </p>
      <p>
        Difficulty: {params.difficulty}
      </p>
      <p>
        Number of Questions: {params.questions}
      </p> */}
      <p className="mt-2 mb-2">
        Question {currentQuestion+1} / {questions.length}
      </p>

      <h2 className="text-3xl font-bold">
        {questions[currentQuestion]}
      </h2>

      <textarea value={currentAnswer}
      onChange = {(e) => setCurrentAnswer(e.target.value)}
      placeholder="Type your answer here..."
      className="mt-6 h-32 w-96 rounded-lg border p-3"
      />

      <button
       onClick={() => {
        if(currentQuestion < questions.length-1){
            setAnswers([...answers , currentAnswer]);
            setCurrentAnswer("");
            setCurrentQuestion(currentQuestion+1)
        }
        else{
            const finalAnswers = [...answers , currentAnswer];
            console.log("Final Answers:",finalAnswers)
            router.push("/interview/results")
        }
       }}
       className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white" 
      >
        {currentQuestion === questions.length-1
        ? "Finish Interview" 
        : "Next Question"}
      </button>
      
      
    </main>
    
    
  );
}

