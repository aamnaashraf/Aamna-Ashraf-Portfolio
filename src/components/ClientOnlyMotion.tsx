// src/components/ClientOnlyMotion.tsx
'use client';

import { motion } from 'framer-motion';

export default function ClientMotionDiv({ 
  initial, // Required to match SSR
  animate,
  className,
  ...props 
}: any) {
  return (
    <motion.div
      initial={initial} // Must match server-side values
      animate={animate}
      className={className}
      {...props}
    />
  );
}