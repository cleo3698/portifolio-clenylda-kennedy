// page.js (ou page.tsx) com Tailwind CSS
import Image from "next/image"; 

export default function Home() {
  return (
    // Classes do Tailwind para centralização total
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      
      {/* Nome em destaque */}
      <h1 className="text-4xl font-bold">CLENYLDA KENNEDY</h1>
      
      {/* Subtítulo */}
      <p className="text-xl mt-2">Estudante de Desenvolvimento de Sistema</p>
    </div>
  );
}