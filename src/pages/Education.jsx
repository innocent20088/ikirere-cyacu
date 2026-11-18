
import { BookOpen, Leaf, Cloud, Droplets } from "lucide-react";

function Education() {
  const lessons = [
    {
      icon: Cloud,
      title: "Understanding Climate Change",
      description: "Learn the difference between weather and climate."
    },
    {
      icon: Leaf,
      title: "Climate and Environment",
      description: "Explore how climate conditions affect ecosystems."
    },
    {
      icon: Droplets,
      title: "Water and Rainfall",
      description: "Understand rainfall patterns and water resources."
    },
    {
      icon: BookOpen,
      title: "Climate Adaptation",
      description: "Discover ways communities can prepare for climate changes."
    }
  ];

  return (
    <div className="page-container">
      <div className="page-heading">
        <h1>Climate Education</h1>
        <p>Learn about climate change and its relationship with Rwanda.</p>
      </div>

      <div className="feature-grid">
        {lessons.map((lesson) => {
          const Icon = lesson.icon;

          return (
            <article className="feature-card" key={lesson.title}>
              <Icon size={30} />
              <h3>{lesson.title}</h3>
              <p>{lesson.description}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Education;
