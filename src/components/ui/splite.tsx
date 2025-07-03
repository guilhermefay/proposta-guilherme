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
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      {/* Spinner moderno */}
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Spinner externo */}
        <motion.div
          className="w-16 h-16 border-4 border-gray-600 border-t-blue-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Spinner interno */}
        <motion.div
          className="absolute inset-2 w-12 h-12 border-4 border-gray-700 border-b-purple-500 rounded-full"
          animate={{ rotate: -360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Ponto central */}
        <motion.div
          className="absolute inset-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.7, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
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