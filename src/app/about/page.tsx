import Image from 'next/image';
import meImage from './1738269710108.jpg';

export default function AboutPage() {
  return (
    <article className="flex gap-8">
      <Image src={meImage} alt="Andrii Dmytruk Photo" loading="eager" />
      <div>
        Hi, I'm Andrii Dmytruk — a junior frontend developer passionate about
        building modern, user-friendly web applications. I specialize in React,
        Next.js, TypeScript, and Tailwind CSS, and enjoy turning ideas into
        clean, responsive UIs. I’ve built several pet projects using this tech
        stack, which helped me deeply understand component architecture,
        routing, API integration, and modern UI practices. Through these
        projects, I’ve also gained experience with Redux Toolkit (RTK) for state
        management, Next.js Server Components, and performance optimization
        techniques. I’m a self-driven learner who enjoys exploring
        documentation, experimenting with new tools, and solving real problems
        through code. My goal is to grow into a strong full-stack developer and
        contribute to meaningful, high-quality products.
      </div>
    </article>
  );
}
