"use client";

import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";
import { wrap } from "popmotion";
import Image from "next/image";

const images = ["/Cardiology.jpeg", "/Oncology.jpeg", "/Oncology2.jpeg"];
Image;
const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function ImageSlider() {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="w-full min-h-full h-full bg-#151515 overflow-hidden p-0 m-0 flex justify-center items-center py-10">
      <div className="w-full max-w-screen-xl h-full relative flex justify-center items-center">
        <>
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={page}
              src={images[imageIndex]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="max-h-[50vh]"
            />
          </AnimatePresence>
          <div
            className="next absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex justify-center items-center select-none cursor-pointer font-bold text-lg z-20"
            onClick={() => paginate(1)}
          >
            {">"}
          </div>
          <div
            className="prev absolute top-1/2 left-4 transform -translate-y-1/2 scale-x-[-1] bg-white rounded-full w-10 h-10 flex justify-center items-center select-none cursor-pointer font-bold text-lg z-20"
            onClick={() => paginate(-1)}
          >
            {">"}
          </div>
        </>
      </div>
    </div>
  );
}
