import { Navigation } from "./components/blocks/navigation/Navigation";
import { Icon } from "./components/elements/icon/Icon";
import { useDownloadCV } from "./hooks/useDownloadCV";
import { Project, useGetProjects } from "./hooks/useGetProjects";
import { Technology, useGetTechnologies } from "./hooks/useGetTechnologies";
import './sections/aboutSection/aboutSection.scss';
import './sections/contactSection/contactSection.scss';
import './sections/homeSection/homeSection.scss';
import './sections/workSection/workSection.scss';


export const App = () => {
  const { handleDownloadCV } = useDownloadCV();
  const { technologies } = useGetTechnologies();
  const { projects } = useGetProjects();

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
            <a href="#work" className="home-section__content__buttons__button--work">
              See my work
              <Icon name="angle-right" type="fas" />
            </a>
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
      <section className="work-section" id="work">
        <div className="work-section__header">
          <h2 className="work-section__header__title">My Portfolio</h2>
          <button type="button" className="work-section__header__button">
            All projects
            <Icon name="angle-right" type="fas" />
          </button>
        </div>
        <div className="work-section__content">
          <div className="work-section__content__project">
            {projects.map((project: Project) => (
              <div className="work-section__content__project__item" key={project.name}>
                <img className="work-section__content__project__item__image" src={project.image} alt={project.name} />
                <h3 className="work-section__content__project__item__title">{project.name}</h3>
                <div className="work-section__content__project__item__info">
                  <div className="work-section__content__project__item__tags">
                    {project.tags.map((tag: string) => (
                      <span className="work-section__content__project__item__tags__tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  <button type="button" onClick={() => window.open(project.link, '_blank')} className="work-section__content__project__item__button">
                    <Icon name="arrow-right" type="fas" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="contact-section" id="contact">
        <div className="contact-section__top-content">
          <h2 className="contact-section__top-content__title">Like what you see? Reach out <a href="mailto:jakubtrncak@gmail.com" className="contact-section__top-content__title__link">via email</a> to collaborate!</h2>
          <button type="button" className="contact-section__top-content__button">Contact me</button>
        </div>
        <div className="contact-section__bottom-content">
          <div className="contact-section__bottom-content__copyright">
            <h2 className="contact-section__bottom-content__copyright__title">Jakub Trnčák</h2>
            <p className="contact-section__bottom-content__copyright__description">© 2025 | All rights reserved.</p>
          </div>
          <div className="contact-section__bottom-content__nav">
            <div className="contact-section__bottom-content__nav__links">
              <p className="contact-section__bottom-content__nav__links__title">Navigate</p>
              <a href="#home" className="contact-section__bottom-content__nav__links__link">Home</a>
              <a href="#about" className="contact-section__bottom-content__nav__links__link">About</a>
              <a href="#work" className="contact-section__bottom-content__nav__links__link">Work</a>
              <a href="#contact" className="contact-section__bottom-content__nav__links__link">Contact</a>
            </div>
            <div className="contact-section__bottom-content__nav__links">
              <p className="contact-section__bottom-content__nav__links__title">Projects</p>
              <a href="#home" className="contact-section__bottom-content__nav__links__link">Home</a>
              <a href="#about" className="contact-section__bottom-content__nav__links__link">About</a>
              <a href="#work" className="contact-section__bottom-content__nav__links__link">Work</a>
              <a href="#contact" className="contact-section__bottom-content__nav__links__link">Contact</a>
            </div>
            <div className="contact-section__bottom-content__nav__links">
              <p className="contact-section__bottom-content__nav__links__title">Socials</p>
              <a href="https://github.com/Orange4Broom" className="contact-section__bottom-content__nav__links__link">Github</a>
              <a href="https://www.linkedin.com/in/jakub-trn%C4%8D%C3%A1k-a74a22260/" className="contact-section__bottom-content__nav__links__link">LinkedIn</a>
              <a href="#work" className="contact-section__bottom-content__nav__links__link">Instagram</a>
              <a href="#contact" className="contact-section__bottom-content__nav__links__link">Discord</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
