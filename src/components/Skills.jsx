import {
  Code2,
  BrainCircuit,
  UsersRound
} from "lucide-react";

const skillGroups = [
  {
    title: "Programming",
    description: "Languages & development technologies",
    icon: Code2,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "React (Vite)",
      "C",
      "Java"
    ]
  },
  {
    title: "AI Tools",
    description: "Tools I use to explore & build with AI",
    icon: BrainCircuit,
    skills: [
      "Claude",
      "ChatGPT",
      "Gemini",
      "Groq",
      "Wispr",
      "Perplexity"
    ]
  },
  {
    title: "Soft Skills",
    description: "How I approach work & collaboration",
    icon: UsersRound,
    skills: [
      "Teaching",
      "Communication",
      "Problem Solving",
      "Teamwork",
      "Adaptability"
    ]
  }
];

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">02 — Skills</span>

          <h2 className="section-title">
            Tools I <span className="gradient-text">work with.</span>
          </h2>

          <p className="section-description">
            A combination of programming, AI tools, and people skills that I
            use while learning and building projects.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                className="skill-card glass-card"
                key={group.title}
              >
                <div className="skill-card-header">
                  <div className="skill-icon">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                </div>

                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span className="skill-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;