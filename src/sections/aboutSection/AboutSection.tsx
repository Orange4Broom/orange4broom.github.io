import { Technology, useGetTechnologies } from "@/hooks/useGetTechnologies";

export const AboutSection = () => {
  const { technologies } = useGetTechnologies();

  return (
    <section className="about-section" id="about">
      <div className="about-section__content">
        <h2 className="about-section__content__title">Current <span className="about-section__content__title--highlight">technologies</span></h2>
        <p className="about-section__content__description">Technologies I use: Expertise in modern tools for building efficient and scalable web solutions.<br />These are some of my main technologies.</p>
      </div>
      <div className="about-section__content__technologies">
        {technologies.map((technology: Technology) => (
          <div className="about-section__content__technologies__technology" key={technology.name}>
            <div className="about-section__content__technologies__technology__icon" style={{ backgroundColor: technology.backgroundColor }}>
              <img src={technology.icon} alt={technology.name} />
            </div>
            <div className="about-section__content__technologies__technology__info">
              <h3 className="about-section__content__technologies__technology__info__name">{technology.name}</h3>
              <p className="about-section__content__technologies__technology__info__description">{technology.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
};
