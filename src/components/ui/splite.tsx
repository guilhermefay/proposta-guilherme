'use client'

import { Suspense, lazy, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

// Componente de preloader sofisticado
function SplineLoader() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      {/* Robô em ASCII enquanto carrega */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-white text-center mb-8"
      >
        <pre className="text-xs sm:text-sm font-mono leading-tight">
{`    ┌─────┐
    │  ○ ○ │
    │   ─  │
    └─────┘
      │ │ │
    ┌─┴─┴─┴─┐
    │ ROBOT │
    │LOADING│
    └───────┘
      │   │
    ┌─┴─┐ ┌─┴─┐`}
        </pre>
      </motion.div>

      {/* Barra de progresso animada */}
      <div className="w-48 h-2 bg-gray-700 rounded-full overflow-hidden mb-4">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ 
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      {/* Texto de loading */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-300 text-sm sm:text-base font-medium"
      >
        Carregando experiência 3D...
      </motion.p>

      {/* Pontos animados */}
      <motion.div
        className="flex space-x-1 mt-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-blue-400 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

// Hook para precarregar a cena
function useSplinePreload(sceneUrl: string) {
  const [isPreloaded, setIsPreloaded] = useState(false)

  useEffect(() => {
    // Precarregar a cena Spline
    const preloadScene = async () => {
      try {
        // Simular preload da cena (Spline não tem API específica, mas podemos tentar carregar o URL)
        const response = await fetch(sceneUrl, { method: 'HEAD' })
        if (response.ok) {
          // Aguardar um tempo mínimo para mostrar o loader
          setTimeout(() => {
            setIsPreloaded(true)
          }, 2000) // 2 segundos mínimo
        }
      } catch (error) {
        console.log('Preload attempt:', error)
        // Fallback: aguardar tempo mínimo e marcar como precarregado
        setTimeout(() => {
          setIsPreloaded(true)
        }, 3000)
      }
    }

    preloadScene()
  }, [sceneUrl])

  return isPreloaded
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const isPreloaded = useSplinePreload(scene)

  const handleLoad = () => {
    setIsLoaded(true)
  }

  if (!isPreloaded) {
    return <SplineLoader />
  }

  return (
    <div className="relative w-full h-full">
      {/* Loader que aparece até o Spline estar totalmente carregado */}
      {!isLoaded && (
        <motion.div
          className="absolute inset-0 z-10"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SplineLoader />
        </motion.div>
      )}
      
      {/* Componente Spline */}
      <Suspense fallback={<SplineLoader />}>
        <motion.div
          className={className}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <Spline
            scene={scene}
            onLoad={handleLoad}
            className="w-full h-full"
          />
        </motion.div>
      </Suspense>
    </div>
  )
} 