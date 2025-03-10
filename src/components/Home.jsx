import React, { useState } from "react";

const resumeSections = [
  { id: 0, title: "Education", content: <Education /> },
  { id: 1, title: "Work Experience", content: <WorkExperience /> },
  { id: 2, title: "Skills", content: <Skills /> },
];

const Home = () => {
  const [selectedSection, setSelectedSection] = useState(0);

  return (
    <div className="w-full h-full p-5">
      {/* Dropdown for CV sections */}
      <select
        value={selectedSection}
        onChange={(e) => setSelectedSection(Number(e.target.value))}
        className="w-52 p-2 rounded-md border-gray-300 dark:border-gray-600 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md text-gray-900 dark:text-gray-100 shadow-lg"
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

export default Home;


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
        <li className="mb-2">iOS application development using MVVM architecture in Swift & SwiftUI, integration of mobile app and Google Firebase and deployment to Apple's TestFlight</li>
        <li>Development of full-stack, dynamic and interactive web applications using React with reusable and modular components and an Express.js backend. Includes deployment to VPS (Nginx and Apache).</li>
      </ul>
    </div>
  );
}

function Skills() {
  return (
    <div>
      <h3 className="text-lg font-semibold">🛠 Technical Skills</h3>
      <ul className="list-disc ml-10">
        <li>College level coursework and extensive experience with various programming languages such as Python, Java, C, and C++</li>
        <li>Development in Linux environments</li>
        <li>iOS application development and UI design</li>
        <li>Web development with JavaScript/TypeScript frameworks (React, Next.js, Angular)</li>
        <li>SQL database design, modeling, and integration with apps</li>
        <li>Understanding of Version Control (Git)</li>
      </ul>
    </div>
  );
}