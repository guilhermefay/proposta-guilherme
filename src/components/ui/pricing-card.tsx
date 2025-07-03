"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface PricingFeature {
  title: string;
  items: string[];
}

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  features: PricingFeature[];
  buttonText?: string;
  onButtonClick?: () => void;
  buttonUrl?: string;
  priceLabel?: string;
}

export function PricingCard({
  title,
  description,
  price,
  originalPrice,
  features,
  buttonText = "Começar",
  onButtonClick,
  buttonUrl,
  priceLabel = "pagamento único",
}: PricingCardProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // Componente de preço para reutilização
  const PriceSection = () => (
    <motion.div className="space-y-4" variants={itemVariants}>
      <div className="flex items-baseline">
        <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">{price}</span>
        {originalPrice && (
          <span className="ml-3 text-xl sm:text-2xl text-muted-foreground line-through">
            {originalPrice}
          </span>
        )}
      </div>
      <span className="block text-sm sm:text-base text-muted-foreground">
        {priceLabel}
      </span>
    </motion.div>
  );

  // Componente do botão para reutilização
  const ButtonSection = () => (
    <motion.div className="mt-6 lg:mt-8" variants={itemVariants}>
      {buttonUrl ? (
        <Button className="w-full text-base sm:text-lg py-4 sm:py-6" size="lg" asChild>
          <a href={buttonUrl} target="_blank" rel="noopener noreferrer">
            {buttonText}
          </a>
        </Button>
      ) : (
        <Button className="w-full text-base sm:text-lg py-4 sm:py-6" size="lg" onClick={onButtonClick}>
          {buttonText}
        </Button>
      )}
    </motion.div>
  );

  return (
    <motion.section
      ref={containerRef}
      className="py-6 md:py-12"
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <Card className="relative mx-auto w-full max-w-6xl overflow-hidden">
        {/* Layout Mobile */}
        <div className="flex flex-col lg:hidden">
          <motion.div className="p-6" variants={itemVariants}>
            <CardHeader className="p-0">
              <CardTitle className="text-2xl sm:text-3xl font-bold">{title}</CardTitle>
              <CardDescription className="mt-3 text-base sm:text-lg">{description}</CardDescription>
            </CardHeader>
          </motion.div>
          
          <Separator />
          
          <motion.div className="bg-muted/50 p-6" variants={itemVariants}>
            <div className="space-y-6">
              {features.map((feature, featureIndex) => (
                <div key={featureIndex}>
                  <h3 className="mb-4 text-lg sm:text-xl font-semibold">{feature.title}:</h3>
                  <ul className="grid grid-cols-1 gap-3">
                    {feature.items.map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center"
                        variants={listItemVariants}
                        custom={index + featureIndex * feature.items.length}
                      >
                        <Check className="mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                        <span className="text-sm sm:text-base">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  {featureIndex < features.length - 1 && <Separator className="my-6" />}
                </div>
              ))}
            </div>
          </motion.div>
          
          <Separator />
          
          <motion.div className="p-6" variants={itemVariants}>
            <PriceSection />
            <ButtonSection />
          </motion.div>
        </div>

        {/* Layout Desktop */}
        <div className="hidden lg:flex flex-row">
          <motion.div
            className="flex flex-col justify-between p-6 lg:w-2/5 lg:p-10"
            variants={itemVariants}
          >
            <div>
              <CardHeader className="p-0">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-bold">{title}</CardTitle>
                    <CardDescription className="mt-3 text-base sm:text-lg">{description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <div className="mt-6">
                <PriceSection />
              </div>
            </div>
            <ButtonSection />
          </motion.div>
          <Separator className="lg:my-6" />
          <motion.div
            className="bg-muted/50 p-6 lg:w-3/5 lg:p-10"
            variants={itemVariants}
          >
            <div className="space-y-6">
              {features.map((feature, featureIndex) => (
                <div key={featureIndex}>
                  <h3 className="mb-4 text-lg sm:text-xl font-semibold">{feature.title}:</h3>
                  <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {feature.items.map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center"
                        variants={listItemVariants}
                        custom={index + featureIndex * feature.items.length}
                      >
                        <Check className="mr-3 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                        <span className="text-sm sm:text-base">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  {featureIndex < features.length - 1 && <Separator className="my-6" />}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.section>
  );
} 