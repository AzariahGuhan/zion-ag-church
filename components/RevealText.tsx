"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  text: string;
  accent?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function RevealText({
  text,
  accent,
  as = "h2",
  className,
  delay = 0,
}: Props) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.h2;
  const Tag = as;

  const words = [
    ...text.split(" ").map((w) => ({ w, accent: false })),
    ...(accent ? accent.split(" ").map((w) => ({ w, accent: true })) : []),
  ];
  const label = [text, accent].filter(Boolean).join(" ");

  if (reduce) {
    return (
      <Tag className={className}>
        {text} {accent && <span className="accent">{accent}</span>}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      aria-label={label}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: delay } },
      }}
    >
      {words.map((item, i) => (
        <span key={i} aria-hidden="true">
          <span className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] align-bottom">
            <motion.span
              className={`inline-block ${item.accent ? "accent" : ""}`}
              variants={{
                hidden: { y: "110%" },
                show: { y: "0%", transition: { duration: 0.9, ease } },
              }}
            >
              {item.w}
            </motion.span>
          </span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </MotionTag>
  );
}