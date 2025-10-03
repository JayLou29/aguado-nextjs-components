export default function SkillsList() {
  const skills = ["JavaScript", "React", "Next.js"];

  return (
    <section style={{ textAlign: "center", margin: "20px 0" }}>
      <h3>Skills</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}