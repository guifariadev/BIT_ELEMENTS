import { useScroll, useTransform, motion } from "framer-motion";

export default function MacbookScroll({ text }) {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.2]);

  return (
    <section className="h-[100vh] flex items-center justify-center">
      <motion.div
        style={{ scale }}
        className="bg-zinc-900 p-10 rounded-xl shadow-2xl text-center"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          {text}
        </h1>
      </motion.div>
    </section>
  );
}
