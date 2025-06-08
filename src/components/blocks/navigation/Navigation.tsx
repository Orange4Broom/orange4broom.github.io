import './navigation.scss';

export const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation__list">
        <div className="navigation__list__item">
          <a href="#home" className="navigation__list__item__link">Home</a>
        </div>
        <div className="navigation__list__item">
          <a href="#work" className="navigation__list__item__link">Work</a>
        </div>
        <div className="navigation__list__item">
          <a href="#about" className="navigation__list__item__link">About</a>
        </div>
        <div className="navigation__list__item">
          <a href="#contact" className="navigation__list__item__link">Contact</a>
        </div>
      </div>
    </nav>
  );
};