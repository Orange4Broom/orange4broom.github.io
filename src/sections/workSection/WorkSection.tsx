import { Icon } from "@/components/elements/icon/Icon";
import { Project, useGetProjects } from "@/hooks/useGetProjects";

export const WorkSection = () => {
  const { projects } = useGetProjects();

  return (
    <section className="work-section" id="work">
      <div className="work-section__header">
        <h2 className="work-section__header__title">My Portfolio</h2>
        {/* <button type="button" className="work-section__header__button">
          All projects
          <Icon name="angle-right" type="fas" />
        </button> */}
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
                {/* <button type="button" onClick={() => window.open(project.link, '_blank')} className="work-section__content__project__item__button">
                  <Icon name="arrow-right" type="fas" />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};