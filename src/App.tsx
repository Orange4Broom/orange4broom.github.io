import { Navigation } from "./components/blocks/navigation/Navigation";
import { Icon } from "./components/elements/icon/Icon";
import { useDownloadCV } from "./hooks/useDownloadCV";
import { useGetTechnologies } from "./hooks/useGetTechnologies";
import './sections/aboutSection/aboutSection.scss';

export const App = () => {
  const { handleDownloadCV } = useDownloadCV();
  const technologies = useGetTechnologies();

  return (
    <>
      <Navigation />
      <section className="home-section" id="home">
        <div className="home-section__content">
          <p className="home-section__content__country">Based in czechia</p>
          <h1 className="home-section__content__title">
            Quality <span className="home-section__content__title--highlight">Design & Professionalism</span> in <span className="home-section__content__title--highlight">Web </span> Development
          </h1>
          <p className="home-section__content__description">
            Hi, I'm Jakub, I create intuitive, visually stunning, and highly functional web applications.
          </p>
          <div className="home-section__content__buttons">
            <button type="button" className="home-section__content__buttons__button--work">
              See my work
              <Icon name="angle-right" type="fas" />
            </button>
            <button type="button" onClick={handleDownloadCV} className="home-section__content__buttons__button--cv">
              <Icon name="file-arrow-down" type="fas" color="#4EB458" />
              Download CV
            </button>
          </div>
        </div>
      </section>
      <section className="about-section" id="about">
        <div className="about-section__content">
          <h2 className="about-section__content__title">Current <span className="about-section__content__title--highlight">technologies</span></h2>
          <p className="about-section__content__description">I'm proficient in a range of modern technologies that empower me to build highly functional solutions.<br />These are some of my main technologies.</p>
        </div>
        <div className="about-section__content__technologies">
          {technologies.map((technology) => (
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
    </>
  );
};
