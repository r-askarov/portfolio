import React from "react";
import { useDarkMode } from "../App";

const Info = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className="p-6 text-gray-800 dark:text-gray-200 md:overflow-hidden">
      <h2 className="text-2xl font-bold mb-4">How This Site Was Built</h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold">UI Development</h3>
        <p>
          The site was built using <strong>React</strong> for its
          component-based architecture. Styling is done with{" "}
          <strong>Tailwind CSS</strong>, making it responsive and easy to
          maintain.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold">Testing</h3>
        <p>
          <strong>Cypress</strong> was used for both end-to-end and component
          testing, ensuring smooth user interactions. Tests cover UI elements
          like the dark mode toggle and GitHub link.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold">CI/CD Pipeline</h3>
        <p>
          A <strong>GitHub Actions</strong> workflow automates deployment. It
          runs Cypress tests on each commit and deploys to GitHub Pages only if
          all tests pass.
        </p>
      </section>

      <section className="w-full md:w-[50%]">
        <h3 className="text-xl font-semibold">Additional Features</h3>
        <ul className="list-disc pl-5">
          <li>Dark mode support with smooth transitions.</li>
          <li>Resume section with a dropdown for navigation.</li>
          <li>3D animated background.</li>
        </ul>
      </section>

      <div className="relative flex flex-row items-center justify-end right-4 space-x-10 top-4 md:top-auto md:bottom-5">
        <i className="fab fa-react text-blue-400 text-4xl"></i>
        <img
          src="https://codekitapp.com/images/help/free-tailwind-icon@2x.png"
          alt="Cypress"
          className="h-8"
        />
        <img
          src={
            darkMode
              ? "https://raw.githubusercontent.com/cypress-io/cypress/develop/assets/cypress-logo-dark.png"
              : "https://raw.githubusercontent.com/cypress-io/cypress/develop/assets/cypress-logo-light.png"
          }
          alt="Cypress"
          className="h-8"
        />
      </div>
    </div>
  );
};

export default Info;
