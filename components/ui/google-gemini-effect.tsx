"use client";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const transition = {
  duration: 0,
  ease: "linear",
};

export const GoogleGeminiEffect = ({
  title,
  description,
  className,
}: {
  title?: string;
  description?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div
      className={cn("relative h-[120vh] w-full overflow-hidden bg-black", className)}
      ref={ref}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        <div className="z-10 px-4 text-center max-w-4xl mx-auto mt-[-5vh]">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-serif font-light tracking-tight pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            {title || `Gogh Studio`}
          </h1>
          <p className="text-sm md:text-xl font-serif font-light text-center text-white/60 mt-6 max-w-2xl mx-auto">
            {description ||
              `独特的艺术氛围，专业的设计理念，让您的项目焕发无限创意与活力`}
          </p>
          <div className="mt-10 md:mt-12">
            <button className="font-serif font-light bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base hover:bg-white/20 transition-all duration-300">
              探索更多
            </button>
          </div>
        </div>

        <div className="absolute inset-0 z-0">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full opacity-70"
          >
            <motion.path
              d="M0 663C145.5 663 191 666.265 269 647C326.5 630 339.5 621 397.5 566C439 531.5 455 529.5 490 523C509.664 519.348 521 503.736 538 504.236C553.591 504.236 562.429 514.739 584.66 522.749C592.042 525.408 600.2 526.237 607.356 523.019C624.755 515.195 641.446 496.324 657 496.735C673.408 496.735 693.545 519.572 712.903 526.769C718.727 528.934 725.184 528.395 730.902 525.965C751.726 517.115 764.085 497.106 782 496.735C794.831 496.47 804.103 508.859 822.469 518.515C835.13 525.171 850.214 526.815 862.827 520.069C875.952 513.049 889.748 502.706 903.5 503.736C922.677 505.171 935.293 510.562 945.817 515.673C954.234 519.76 963.095 522.792 972.199 524.954C996.012 530.611 1007.42 534.118 1034 549C1077.5 573.359 1082.5 594.5 1140 629C1206 670 1328.5 662.5 1440 662.5"
              stroke="rgba(255, 183, 197, 0.5)"
              strokeWidth="3"
              fill="none"
              filter="url(#glow1)"
              initial={{
                pathLength: 0,
              }}
              style={{
                pathLength: pathLengthFirst,
              }}
              transition={transition}
            />
            <motion.path
              d="M0 663C145.5 663 191 666.265 269 647C326.5 630 339.5 621 397.5 566C439 531.5 455 529.5 490 523C509.664 519.348 521 503.736 538 504.236C553.591 504.236 562.429 514.739 584.66 522.749C592.042 525.408 600.2 526.237 607.356 523.019C624.755 515.195 641.446 496.324 657 496.735C673.408 496.735 693.545 519.572 712.903 526.769C718.727 528.934 725.184 528.395 730.902 525.965C751.726 517.115 764.085 497.106 782 496.735C794.831 496.47 804.103 508.859 822.469 518.515C835.13 525.171 850.214 526.815 862.827 520.069C875.952 513.049 889.748 502.706 903.5 503.736C922.677 505.171 935.293 510.562 945.817 515.673C954.234 519.76 963.095 522.792 972.199 524.954C996.012 530.611 1007.42 534.118 1034 549C1077.5 573.359 1082.5 594.5 1140 629C1206 670 1328.5 662.5 1440 662.5"
              stroke="rgba(54, 255, 232, 0.5)"
              strokeWidth="3"
              fill="none"
              filter="url(#glow2)"
              initial={{
                pathLength: 0,
              }}
              style={{
                pathLength: pathLengthSecond,
              }}
              transition={transition}
            />
            <motion.path
              d="M0 663C145.5 663 191 666.265 269 647C326.5 630 339.5 621 397.5 566C439 531.5 455 529.5 490 523C509.664 519.348 521 503.736 538 504.236C553.591 504.236 562.429 514.739 584.66 522.749C592.042 525.408 600.2 526.237 607.356 523.019C624.755 515.195 641.446 496.324 657 496.735C673.408 496.735 693.545 519.572 712.903 526.769C718.727 528.934 725.184 528.395 730.902 525.965C751.726 517.115 764.085 497.106 782 496.735C794.831 496.47 804.103 508.859 822.469 518.515C835.13 525.171 850.214 526.815 862.827 520.069C875.952 513.049 889.748 502.706 903.5 503.736C922.677 505.171 935.293 510.562 945.817 515.673C954.234 519.76 963.095 522.792 972.199 524.954C996.012 530.611 1007.42 534.118 1034 549C1077.5 573.359 1082.5 594.5 1140 629C1206 670 1328.5 662.5 1440 662.5"
              stroke="rgba(199, 54, 255, 0.5)"
              strokeWidth="3"
              fill="none"
              filter="url(#glow3)"
              initial={{
                pathLength: 0,
              }}
              style={{
                pathLength: pathLengthThird,
              }}
              transition={transition}
            />
            <motion.path
              d="M0 663C145.5 663 191 666.265 269 647C326.5 630 339.5 621 397.5 566C439 531.5 455 529.5 490 523C509.664 519.348 521 503.736 538 504.236C553.591 504.236 562.429 514.739 584.66 522.749C592.042 525.408 600.2 526.237 607.356 523.019C624.755 515.195 641.446 496.324 657 496.735C673.408 496.735 693.545 519.572 712.903 526.769C718.727 528.934 725.184 528.395 730.902 525.965C751.726 517.115 764.085 497.106 782 496.735C794.831 496.47 804.103 508.859 822.469 518.515C835.13 525.171 850.214 526.815 862.827 520.069C875.952 513.049 889.748 502.706 903.5 503.736C922.677 505.171 935.293 510.562 945.817 515.673C954.234 519.76 963.095 522.792 972.199 524.954C996.012 530.611 1007.42 534.118 1034 549C1077.5 573.359 1082.5 594.5 1140 629C1206 670 1328.5 662.5 1440 662.5"
              stroke="rgba(255, 222, 54, 0.5)"
              strokeWidth="3"
              fill="none"
              filter="url(#glow4)"
              initial={{
                pathLength: 0,
              }}
              style={{
                pathLength: pathLengthFourth,
              }}
              transition={transition}
            />
            <motion.path
              d="M0 663C145.5 663 191 666.265 269 647C326.5 630 339.5 621 397.5 566C439 531.5 455 529.5 490 523C509.664 519.348 521 503.736 538 504.236C553.591 504.236 562.429 514.739 584.66 522.749C592.042 525.408 600.2 526.237 607.356 523.019C624.755 515.195 641.446 496.324 657 496.735C673.408 496.735 693.545 519.572 712.903 526.769C718.727 528.934 725.184 528.395 730.902 525.965C751.726 517.115 764.085 497.106 782 496.735C794.831 496.47 804.103 508.859 822.469 518.515C835.13 525.171 850.214 526.815 862.827 520.069C875.952 513.049 889.748 502.706 903.5 503.736C922.677 505.171 935.293 510.562 945.817 515.673C954.234 519.76 963.095 522.792 972.199 524.954C996.012 530.611 1007.42 534.118 1034 549C1077.5 573.359 1082.5 594.5 1140 629C1206 670 1328.5 662.5 1440 662.5"
              stroke="rgba(255, 54, 54, 0.5)"
              strokeWidth="3"
              fill="none"
              filter="url(#glow5)"
              initial={{
                pathLength: 0,
              }}
              style={{
                pathLength: pathLengthFifth,
              }}
              transition={transition}
            />
            <defs>
              <filter id="glow1">
                <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
                <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.7 0 0 0 0 0.8 0 0 0 1 0" />
              </filter>
              <filter id="glow2">
                <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
                <feColorMatrix values="0 0 0 0 0.2 0 0 0 0 1 0 0 0 0 0.9 0 0 0 1 0" />
              </filter>
              <filter id="glow3">
                <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
                <feColorMatrix values="0 0 0 0 0.8 0 0 0 0 0.2 0 0 0 0 1 0 0 0 1 0" />
              </filter>
              <filter id="glow4">
                <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
                <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.9 0 0 0 0 0.2 0 0 0 1 0" />
              </filter>
              <filter id="glow5">
                <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
                <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 1 0" />
              </filter>
            </defs>
          </svg>
          
          {/* 背景渐变叠加 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80"></div>
        </div>
      </div>
    </div>
  );
}; 