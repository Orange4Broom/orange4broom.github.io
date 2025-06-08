import { Icon } from "@/components/elements/icon/Icon";
import { useDownloadCV } from "@/hooks/useDownloadCV";
import './homeSection.scss';

export const HomeSection = () => {
  const { handleDownloadCV } = useDownloadCV();

  return (
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
  );
};