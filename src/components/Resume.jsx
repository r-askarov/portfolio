import React, { useState } from "react";

const resumeSections = [
  { id: 0, title: "Education", content: <Education /> },
  { id: 1, title: "Work Experience", content: <WorkExperience /> },
  { id: 2, title: "Skills", content: <Skills /> },
];

const Resume = () => {
  const [selectedSection, setSelectedSection] = useState(0);

  return (
    <div className="w-full h-full p-5">
      {/* Dropdown for CV sections */}
      <select
        value={selectedSection}
        onChange={(e) => setSelectedSection(Number(e.target.value))}
        className="w-44 p-2 rounded-md border-gray-300 dark:border-gray-600 bg-white/30 dark:bg-gray-600/30 backdrop-blur-md text-gray-900 dark:text-gray-100 shadow-lg"
      >
        {resumeSections.map((section) => (
          <option key={section.id} value={section.id}>
            {section.title}
          </option>
        ))}
      </select>

      {/* Resume Content */}
      <div className="mt-4 text-lg text-gray-900 dark:text-gray-100">
        {resumeSections[selectedSection].content}
      </div>
    </div>
  );
};

export default Resume;

// Resume section components
function Education() {
  return (
    <div>
      <h3 className="text-lg font-semibold">🎓 Bachelor Of Arts in Computer Science, University Of Minnesota</h3>
      <p>September 2021 - May 2024</p>
      <p>Graduated with high distinction (3.91 cumulative GPA on a 4.0 scale). </p>
      <br></br>
      <p className="font-bold">Academic Experience</p>
      <ul className="list-disc ml-5">
        <li>Machine learning basics of classification and regression using common parametric and non-parametric methods</li>
        <li>Practice of software development lifecycles using Waterfall and Agile methodologies including work in a Scrum development team</li>
        <li>Practice of programming with low level languages such as C and Assembly. Good understanding of underlying programming concepts including memory management</li>
        <li>Utilization of design patterns and best practices to enhance overall architecture, performance and maintainability of software projects</li>
        <li>Unit testing with JUnit in Java and GoogleTest framework in C++</li>
        <li>API / Backend development using Python and JavaScript web frameworks</li>
      </ul>
      <br></br>
      <p className="font-bold">Important Courses Completed</p>
      <ul className="list-disc ml-5 pb-3">
        <li> CSCI 5801 Software Engineering I</li>
        <li>CSCI 5521 Machine Learning Fundamentals</li>
        <li>CSCI 3081W Program Design & Development</li>
        <li>CSCI 4511W Intro: Artificial Intelligence</li>
      </ul>
    </div>
  );
}

function WorkExperience() {
  return (
    <div>
      <h3 className="text-lg font-semibold">💼 Software Engineer</h3>
      <p>Avenica, Inc. (2022-Present)</p>
      <ul className="list-disc ml-5 mt-2">
        <li className="mb-2">Developing iOS applications using Swift and SwiftUI, following MVVM architecture for maintainable and scalable code.</li>
        <li className="mb-2">Integrating mobile applications with Google Firebase for authentication, database storage, and real-time updates.</li>
        <li className="mb-2">Deploying and managing iOS applications through Apple's TestFlight for beta testing and iterative improvements.</li>
        <li className="mb-2">Building dynamic and interactive web applications using React, leveraging reusable and modular component-based design.</li>
        <li className="mb-2">Developing full-stack solutions with an Express.js backend, implementing RESTful APIs and handling server-side logic.</li>
        <li className="mb-2">Deploying web applications to Virtual Private Servers (VPS) using Nginx and Apache, ensuring optimal performance and security.</li>
      </ul>
    </div>
  );
}

function Skills() {
  return (
    <div>
      <h3 className="text-lg font-semibold">🛠 Technical Skills</h3>
      <ul className="list-disc ml-5 mt-2">
        <li className="mb-2">College level coursework and extensive experience with various programming languages such as Python, Java, C, and C++</li>
        <li className="mb-2">Development in Linux environments</li>
        <li className="mb-2">iOS application development and UI design</li>
        <li className="mb-2">Web development with JavaScript/TypeScript frameworks (React, Next.js, Angular)</li>
        <li className="mb-2">SQL database design, modeling, and integration with apps</li>
        <li className="mb-2">Understanding of Version Control (Git)</li>
      </ul>
    </div>
  );
}