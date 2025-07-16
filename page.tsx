import React from "react";
import { Button } from "@/components/ui/button";
import { Globe, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      {/* LOGO AU CENTRE */}
      <div className="mb-8 animate-fade-in">
        <img
          src="/logo-autogain.png"
          alt="AutoGain Logo"
          className="w-40 h-40 object-contain"
        />
      </div>

      {/* TEXTE D'ACCROCHE */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 animate-slide-up">
        Automatisez vos gains.<br className="hidden md:block" /> Simplement. Intelligemment.
      </h1>

      {/* BOUTONS */}
      <div className="flex gap-4 animate-slide-up-delay">
        <Button className="text-lg px-6 py-3 rounded-2xl">
          <ArrowRight className="mr-2 w-5 h-5" /> Commencer
        </Button>
        <Button variant="outline" className="text-lg px-6 py-3 rounded-2xl border-white">
          <Globe className="mr-2 w-5 h-5" /> Langue
        </Button>
      </div>

      {/* PIED DE PAGE */}
      <footer className="absolute bottom-4 text-xs text-gray-400">
        © 2025 AutoGain · Trading IA sécurisé · Made in Québec
      </footer>
    </div>
  );
}