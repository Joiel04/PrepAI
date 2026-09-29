"use client";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();


  return (
    <main className="flex min-h-screen  flex-col items-center ">
      <h1 className="text-4xl font-bold">AI Interviewer</h1>

      <p className="mt-4 text-lg">
        Welcome to the AI Interviewer! This application allows you to practice your interview skills with an AI-powered interviewer. You can ask questions, receive feedback, and improve your performance in a simulated interview environment.
      </p>

      <button
       onClick=
       {() => router.push("/interview")}
       className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white"> Start Interview
       </button>
    </main>
  );
}
