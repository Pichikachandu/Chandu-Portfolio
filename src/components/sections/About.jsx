import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "TypeScript",
    "TailwindCSS",
    "Bootstrap",
    "HTML3",
    "CSS3",
    "JavaScript",
  ];

  const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "MySQL", "Express.js"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education Section */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.E in Computer Science & Engineering</strong> – T.J.S Engineering College (Affiliated to Anna University) | (2022–2026)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, Cloud Computing, Operating Systems, Database Management Systems
                </li>
              </ul>
              <br />
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Intermediate -MPC(XI-XII)</strong> – Sri Pratibha Junior College | (2020–2022)
                </li>
                <li>
                  Relevant Coursework: Mathematics, Physics, Chemistry
                </li>
              </ul>
              <br />
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>SSC(X)</strong> – A.P Model School & Junior College | (2019-2020)
                </li>
                <li>
                  Relevant Coursework: General Science, Mathematics, Social Studies, English
                </li>
              </ul>
            </div>

            {/* Work Experience Section */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <ul className="space-y-6 text-gray-300 list-none">
                {/* Murven Internship */}
                <li>
                  <h4 className="font-semibold text-white">
                    Web Developer Intern – Murven Design Solutions <span className="text-sm text-gray-400">(Dec 2024 – Feb 2025)</span>
                  </h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Developed a serverless application using Python and AWS Lambda to process PDF files.</li>
                    <li>Designed a system to take a 4-page PDF and generate a 2x2 layout on a single page for optimized printing.</li>
                    <li>Created and deployed RESTful API endpoints using Node.js, integrated with AWS Lambda for backend processing.</li>
                  </ul>
                </li>

                {/* AWS Project Internship */}
                <li>
                  <h4 className="font-semibold text-white">
                    AWS Project Intern – Naan Mudhalvaan <span className="text-sm text-gray-400">(Nov 2024 – Dec 2024)</span>
                  </h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Led development of a cloud-hosted virtual classroom using AWS EC2, S3, and RDS for scalable infrastructure.</li>
                    <li>Built a full-stack web app with Flask (Python) and MySQL, integrating secure APIs and dynamic UI with HTML, CSS, and JavaScript.</li>
                    <li>Used GitHub for collaboration and optimized costs using AWS Cost Explorer while improving cloud deployment practices.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
