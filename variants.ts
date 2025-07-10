type Direction = "up" | "down" | "left" | "right";

interface FadeInVariants {
  hidden: {
    x: number;
    y: number;
    opacity: number;
  };
  show: {
    x: number;
    y: number;
    opacity: number;
    transition: {
      type: string;
      duration: number;
      delay: number;
      ease: number[];
    };
  };
}

export const fadeIn = (
  direction: Direction = "up",
  delay: number = 0
): FadeInVariants => {
  let x = 0;
  let y = 0;

  switch (direction) {
    case "up":
      y = 50;
      break;
    case "down":
      y = -50;
      break;
    case "left":
      x = 50;
      break;
    case "right":
      x = -50;
      break;
  }

  return {
    hidden: {
      x,
      y,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
