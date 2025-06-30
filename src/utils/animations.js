export const fadeInUp = {
  initial: { opacity: 0, y: 60, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -30, scale: 0.95 },
  transition: {
    duration: 0.8,
    ease: [0.25, 0.1, 0.25, 1],
    staggerChildren: 0.15,
  },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

export const slideIn = {
  initial: { x: 100, opacity: 0, rotateY: 15 },
  animate: { x: 0, opacity: 1, rotateY: 0 },
  exit: { x: -100, opacity: 0, rotateY: -15 },
  transition: { duration: 0.7, ease: "easeInOut" },
};

export const scaleIn = {
  initial: { scale: 0.6, opacity: 0, rotateZ: -10 },
  animate: { scale: 1, opacity: 1, rotateZ: 0 },
  exit: { scale: 0.6, opacity: 0, rotateZ: 10 },
  transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
};

export const magneticHover = {
  rest: { scale: 1, rotateZ: 0 },
  hover: {
    scale: 1.05,
    rotateZ: 2,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
  tap: { scale: 0.95, rotateZ: -1 },
};

export const floatingAnimation = {
  animate: {
    y: [-15, 15, -15],
    rotateZ: [-2, 2, -2],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const liquidMorph = {
  initial: {
    borderRadius: "20% 30% 40% 50%",
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    borderRadius: [
      "20% 30% 40% 50%",
      "50% 20% 30% 40%",
      "40% 50% 20% 30%",
      "20% 30% 40% 50%",
    ],
    scale: 1,
    opacity: 1,
    transition: {
      borderRadius: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
      scale: { duration: 0.8, ease: "easeOut" },
      opacity: { duration: 0.6 },
    },
  },
};

export const particleBurst = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: [0, 1.2, 1],
    opacity: [0, 1, 0.8],
    transition: {
      duration: 1.2,
      times: [0, 0.6, 1],
      ease: "easeOut",
    },
  },
};

export const breathe = {
  animate: {
    scale: [1, 1.02, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const textReveal = {
  initial: { width: 0, opacity: 0 },
  animate: {
    width: "auto",
    opacity: 1,
    transition: {
      width: { duration: 1.5, ease: "easeInOut" },
      opacity: { duration: 0.5, delay: 0.5 },
    },
  },
};

export const physicsStagger = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

export const gradientShift = {
  animate: {
    background: [
      "linear-gradient(45deg, #f3e8ff, #fdf2f8)",
      "linear-gradient(135deg, #fdf2f8, #f0f9ff)",
      "linear-gradient(225deg, #f0f9ff, #f7f1e8)",
      "linear-gradient(315deg, #f7f1e8, #f3e8ff)",
    ],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export const glassReflection = {
  rest: {
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
  },
  hover: {
    background: [
      "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
      "linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1))",
      "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
    ],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

export const elasticEntrance = {
  initial: { scale: 0, rotateZ: -180 },
  animate: {
    scale: 1,
    rotateZ: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 12,
      duration: 1.2,
    },
  },
};

export const hoverEffects = {
  gentle: {
    scale: 1.02,
    y: -2,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },

  lift: {
    scale: 1.05,
    y: -8,
    rotateX: 5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },

  glow: {
    boxShadow: [
      "0 10px 30px rgba(0,0,0,0.1)",
      "0 15px 40px rgba(0,0,0,0.15)",
      "0 20px 50px rgba(0,0,0,0.2)",
    ],
    transition: { duration: 0.4, ease: "easeOut" },
  },

  magnetic: {
    scale: 1.03,
    rotateY: 5,
    rotateX: 2,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20,
    },
  },
};

export const pageTransition = {
  initial: {
    opacity: 0,
    scale: 0.9,
    filter: "blur(10px)",
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 1.1,
    filter: "blur(5px)",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const getStaggerDelay = (index, baseDelay = 100) => {
  return index * baseDelay + Math.random() * 50;
};

export const createWaveAnimation = (amplitude = 10, frequency = 0.02) => ({
  animate: {
    y: Array.from(
      { length: 10 },
      (_, i) => Math.sin(i * frequency) * amplitude
    ),
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

export const mouseFollower = (mouseX, mouseY) => ({
  x: mouseX * 0.1,
  y: mouseY * 0.1,
  transition: {
    type: "spring",
    stiffness: 150,
    damping: 15,
  },
});
