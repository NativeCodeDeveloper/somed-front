'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
  },
};

const HeroSection = ({ title, subtitle, actions, stats, images, className }) => {
  return (
    <section className={cn('w-full overflow-hidden bg-white py-12 sm:py-24', className)}>
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-8 lg:px-10">

        {/* Left Column: Text Content */}
        <motion.div
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl leading-tight"
            variants={itemVariants}
          >
            {title}
          </motion.h1>

          <motion.p
            className="mt-6 max-w-md text-lg text-slate-500 leading-relaxed"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
            variants={itemVariants}
          >
            {actions.map((action, index) => (
              <Button
                key={index}
                onClick={action.onClick}
                variant={action.variant ?? 'default'}
                size="lg"
                className={action.className}
                style={action.style}
              >
                {action.text}
              </Button>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start"
            variants={itemVariants}
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ backgroundColor: '#e8f9f9' }}
                >
                  {stat.icon}
                </div>
                <div>
                  <p className="text-xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Image Collage */}
        <motion.div
          className="relative h-[400px] w-full sm:h-[500px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Decorative floating shapes — teal SOMED palette */}
          <motion.div
            className="absolute -top-4 left-1/4 h-16 w-16 rounded-full opacity-40"
            style={{ backgroundColor: '#4DBFBF' }}
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-0 right-1/4 h-10 w-10 rounded-lg opacity-30"
            style={{ backgroundColor: '#9E9E9E' }}
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 0.5 }}
          />
          <motion.div
            className="absolute bottom-1/4 left-4 h-6 w-6 rounded-full opacity-40"
            style={{ backgroundColor: '#4DBFBF' }}
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 1 }}
          />

          {/* Top Center image */}
          <motion.div
            className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-2xl bg-slate-100 p-2 shadow-lg sm:h-64 sm:w-64"
            variants={imageVariants}
          >
            <img
              src={images[0]}
              alt="Consulta oftalmológica"
              className="h-full w-full rounded-xl object-cover"
            />
          </motion.div>

          {/* Right Middle image */}
          <motion.div
            className="absolute right-0 top-1/3 h-40 w-40 rounded-2xl bg-slate-100 p-2 shadow-lg sm:h-52 sm:w-52"
            variants={imageVariants}
          >
            <img
              src={images[1]}
              alt="Atención visual"
              className="h-full w-full rounded-xl object-cover"
            />
          </motion.div>

          {/* Bottom Left image */}
          <motion.div
            className="absolute bottom-0 left-0 h-32 w-32 rounded-2xl bg-slate-100 p-2 shadow-lg sm:h-44 sm:w-44"
            variants={imageVariants}
          >
            <img
              src={images[2]}
              alt="Salud visual familiar"
              className="h-full w-full rounded-xl object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
