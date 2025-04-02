import React from "react";
import TypewriterTitle from "./TypewriterTitle";

const Profile = () => {
  return (
    <div className="p-6 text-gray-800 dark:text-gray-200 md:overflow-hidden">
      <h2 className="text-4xl font-bold md:-mt-6 mb-4">
        <TypewriterTitle title={"Welcome to my portfolio"} />
      </h2>

      <section className="mb-6">
        <p className="mb-4">
          I am an ambitious and highly motivated recent graduate eager to launch
          my career in software engineering. Throughout my academic journey, I
          have consistently excelled, developing strong problem-solving skills
          and a deep understanding of modern development practices.
        </p>
      </section>

      <section className="mb-6">
        <p className="mb-4">
          My education, combined with hands-on experience in software
          development, has equipped me with the technical expertise and
          adaptability needed to contribute effectively to a development team. I
          am well-versed in industry-standard technologies and best practices,
          ensuring that I can deliver high-quality, maintainable code from day
          one.
        </p>
      </section>

      <section className="mb-6">
        <p className="mb-4">
          I am seeking a full-time developer role where I can apply my
          knowledge, grow as a professional, and make meaningful contributions
          to innovative projects. My ability to learn quickly, collaborate
          effectively, and tackle complex challenges makes me a strong addition
          to any engineering team.
        </p>
      </section>

      <section className="w-full md:w-[50%]">
        <p>
          I'm excited about opportunities where I can leverage my skills, gain
          practical experience, and continue to expand my expertise in the
          ever-evolving world of software development.
        </p>
      </section>

      <div className="relative flex flex-row items-center justify-nce right-4 space-x-10 top-4 md:top-auto md:bottom-5">
         
      </div>
    </div>
  );
};

export default Profile;
