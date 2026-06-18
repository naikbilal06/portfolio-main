import Link from 'next/link';
import { FiDownload, FiLink, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

export const metadata = {
  title: 'Resume | Bilal Ahmad Naikoo',
  description: 'Resume page for Bilal Ahmad Naikoo, full-stack developer and BCA student.',
};

const skills = [
  {
    category: 'Languages',
    items: ['C#', 'JavaScript', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React.js', 'Node.js', 'Express.js', 'ASP.NET', 'Flask', 'BeautifulSoup'],
  },
  {
    category: 'Databases & Tools',
    items: ['SQL Server', 'MongoDB', 'Git', 'GitHub', 'VS Code', 'Postman'],
  },
];

const projects = [
  {
    title: 'Website Analyzer',
    period: '2024',
    description:
      'Built a full-stack web application that audits websites for SEO health, page performance, and analytics, producing clear, actionable reports.',
    tech: ['Python', 'Flask', 'BeautifulSoup', 'SQLite', 'SEO'],
  },
  {
    title: 'Hotel Management System',
    period: '2024',
    description:
      'Developed a hotel reservation and billing solution using ASP.NET Core and SQL Server, including room availability tracking and customer records management.',
    tech: ['C#', 'ASP.NET Core', 'Entity Framework', 'SQL Server', 'Bootstrap'],
  },
];

const education = [
  {
    title: 'Bachelor of Computer Applications (BCA)',
    institution: 'Shaheed Himayum Muzzamil Memorial Government Degree College, Anantnag',
    date: 'Expected June 2024',
  },
  {
    title: 'Higher Secondary (12th)',
    institution: 'Govt. Higher Secondary School, Hakura',
    date: '2020',
  },
  {
    title: 'Secondary (10th)',
    institution: 'Public Model High School, Hakura',
    date: '2018',
  },
];

const languages = ['English', 'Urdu', 'Kashmiri'];

export default function ResumePage() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12">
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400 font-semibold">Resume</p>
                  <h1 className="text-4xl md:text-5xl font-bold mt-4">Bilal Ahmad Naikoo</h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mt-2">Full-Stack Developer | BCA Student</p>
                </div>
                <Link
                  href="/resume.html"
                  className="inline-flex items-center gap-2 rounded-full border border-blue-600 bg-blue-600 px-5 py-3 text-white hover:bg-blue-700 transition-colors"
                >
                  <FiDownload />
                  Download Resume
                </Link>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <FiMail />
                    <span>naikbilal136@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <FiPhone />
                    <span>+91 7889629463</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <FiMapPin />
                    <span>Anantnag, Jammu & Kashmir, India</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <FiLink />
                    <span>linkedin.com/in/naik-bilal-01ba0b2ab</span>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Professional Summary</h2>
                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-8">
                  Full-stack developer and Bachelor of Computer Applications student with hands-on experience designing and building
                  web applications across the front end and back end. Proficient in React.js, Node.js, Express.js, ASP.NET, and SQL Server,
                  with practical exposure to RESTful API design, relational data modeling, and version control with Git.
                </p>
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Projects</h2>
                <div className="mt-6 space-y-6">
                  {projects.map((project) => (
                    <div key={project.title} className="rounded-3xl border border-gray-200 dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-900">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                          <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">{project.period}</p>
                        </div>
                      </div>
                      <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">{project.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span key={tech} className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900/40 dark:text-blue-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Skills</h2>
              <div className="mt-6 space-y-6">
                {skills.map((group) => (
                  <div key={group.category}>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">{group.category}</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h2>
              <div className="mt-6 space-y-6">
                {education.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-gray-200 p-5 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                    <p className="text-sm text-blue-600 dark:text-blue-400">{item.date}</p>
                    <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 leading-7">{item.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Languages</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {languages.map((language) => (
                  <span key={language} className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200">
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
