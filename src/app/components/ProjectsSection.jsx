"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Promptopia Website",
    description: "A website for generating a correct prompt helping in writing an email, letter as well as new paragraph. Programming language: Next.js , HTML/CSS , MongoDb.",
    image: "/images/projects/1.png",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/Tanishq2003be/First-Next-APP",
    previewUrl: "https://first-next-15hjyhkb5-tanishq2003bes-projects.vercel.app/",
  },
  {
    id: 2,
    title: "Netflix-Clone",
    description: "Landing and home page of Netflix with trailer of all movies fetched by api of tmdb. When you click on any movie you can see it's trailer on landing page. Programming Language: HML,CSS,ReactJS.",
    image: "/images/projects/2.png",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/Tanishq2003be/Netflix-clone",
    previewUrl: "https://netflix-clone-2eai-git-main-tanishq2003bes-projects.vercel.app/",
  },
  {
    id: 3,
    title: "E-commerce(Frontend)",
    description: "A frontend project for buying cosmetics with use of animation and slider like features. programming language used in this project is HTML/CSS ,JAVASCIPT,REACTJS",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tanishq2003be/cosmetics-website",
    previewUrl: "https://cosmetics-website-ten.vercel.app/",
  },
  {
    id: 4,
    title: "Adventure",
    description: "A frontend project for exploring adventure according to your mood. Programming Languages: HTML,CSS,JavaScript,React",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tanishq2003be/adventure",
    previewUrl: "https://adventure-pied.vercel.app/",
  },
  {
    id: 5,
    title: "Twitter-Clone",
    description: "A clone of twitter to tweet with our friends and anyone in world that you want to. Programming Language: HTML,Tailwind CSS, Next.js , MongoDb, TypeScript.",
    image: "/images/projects/5.png",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/Tanishq2003be/Zitter",
    previewUrl: "https://zitter-tanishq2003bes-projects.vercel.app/",
  },
  {
    id: 6,
    title: "Chat-A-Tive",
    description: "It is designed to chat with our friends in real time by use of socket.io. Programming Language: HTML/CSS, React.js, MongoDb, Node.js, Express.js,Socket.io",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tanishq2003be/Chat-A-Tive",
    previewUrl:"/"
  },
  {
    id: 7,
    title: "Hostel-Management",
    description: "A full stack website for managing facilities in hostel like attendence marking , add student , rooms and beds information etc. Programming Language: HTML,CSS,Mongo DB, Express.Js,React.Js,Node.Js.",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tanishq2003be/Hostel-Management",
    previewUrl:"/"
  },
  {
    id: 8,
    title: "Zentacle: E-Commerce (Internship)",
    description: "Developed an e-commerce platform for startup (Zentacle) using the MERN stack, featuring product browsing, secure purchasing, order tracking, and a multivendor marketplace.",
    image: "/images/projects/8.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tanishq2003be/E-Commerce-Zentacle",
    previewUrl:"/"
  },

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
