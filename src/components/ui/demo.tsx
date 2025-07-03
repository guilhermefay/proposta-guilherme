'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-screen bg-black/[0.96] relative overflow-hidden border-0 rounded-none">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      {/* Layout responsivo - vertical em mobile, horizontal em desktop */}
      <div className="max-w-8xl mx-auto w-full h-full">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Conteúdo da esquerda */}
          <div className="flex-1 py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-18 md:pr-16 lg:pr-20 relative z-10 flex flex-col justify-center" style={{ paddingLeft: 'clamp(1rem, 4vw, 50px)' }}>
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
              Inovação que transforma<br />
              ideias em resultados
            </h1>
            <p className="mt-6 md:mt-8 text-neutral-300 max-w-xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              Proposta detalhada para o desenvolvimento completo de software personalizado e escalável, pensado para gerar valor, diferenciação e crescimento constante para o seu negócio.
            </p>
          </div>

          {/* Conteúdo da direita - robô 3D grudado na parte inferior */}
          <div className="flex-1 relative h-full flex items-end">
            <div className="w-full h-full relative">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="absolute inset-0 w-full h-full object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
} 