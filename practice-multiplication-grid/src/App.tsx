import './App.css'
import MultiplicationMatrix from './components/MultiplicationMatrix';

export default function App() {
  return <main className="min-h-screen flex justify-center items-center">
    <h1 className="text-3xl font-bold underline text-blue-500">
      Hello, World!
    </h1>
    <MultiplicationMatrix />
  </main>;
}