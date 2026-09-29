"use client";
import {useState} from "react";
import { useRouter } from "next/navigation";

export default function Interview() {
  const [difficulty, setDifficulty] = useState("Medium");
  const [role , setRole] = useState("");
  const [questions, setQuestions] = useState(5);
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">
        Interview Page
      </h1>

      
      <input 
        type="text"
        placeholder="Enter job role"
        value={role}
        onChange = {(e) => setRole(e.target.value)}
        className="mt-6 rounded-lg border px-4 py-2"
      />
      <p className="mt-4"> 
        Selelcted Role: {role}
      </p>

       <p className="mt-6 text-lg">
        Difficulty: {difficulty}
      </p>

      <select 
        value = {difficulty}
        onChange = {(e) => setDifficulty(e.target.value)}
      >
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>

      <select 
        value = {questions}
        onChange = {(e) => setQuestions(Number(e.target.value))}
        className="mt-4 rounded-lg border px-4 py-2"
      >
        <option value="5">5 Questions</option>
        <option value="10">10 Questions</option>
        <option value="15">15 Questions</option>
      </select>
      <p className="mt-4">
        Selected Number of Questions: {questions}
      </p>

      <button
        onClick={() => {
            if(role.trim() === ""){
                alert("Please enter a job role");
                return;
            }
            router.push(`/interview/questions?role=${encodeURIComponent(role)}&difficulty=${difficulty}&questions=${questions}`);
        }}
        className="mt-6 rounder-lg bg-blue-600 px-6 py-3 text-white"
      >
        Start Interview
      </button>

    </main>
  );
}