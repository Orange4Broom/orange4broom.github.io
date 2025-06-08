import './contactSection.scss';

export const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-section__top-content">
        <h2 className="contact-section__top-content__title">Like what you see? Reach out <a href="mailto:orang4broom@gmail.com" className="contact-section__top-content__title__link">via email</a> to collaborate!</h2>
        <button type="button" onClick={() => window.open('mailto:orang4broom@gmail.com', '_blank')} className="contact-section__top-content__button">Contact me</button>
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
          {/* <div className="contact-section__bottom-content__nav__links">
            <p className="contact-section__bottom-content__nav__links__title">Projects</p>
            {projects.slice(0, 4).map((project) => (
              <a key={project.id} href={project.link} className="contact-section__bottom-content__nav__links__link">{project.name}</a>
            ))}

          </div> */}
          <div className="contact-section__bottom-content__nav__links">
            <p className="contact-section__bottom-content__nav__links__title">Socials</p>
            <a href="https://github.com/Orange4Broom" target="_blank" className="contact-section__bottom-content__nav__links__link">Github</a>
            <a href="https://www.linkedin.com/in/jakub-trn%C4%8D%C3%A1k-a74a22260/" target="_blank" className="contact-section__bottom-content__nav__links__link">LinkedIn</a>
            <a href="https://www.instagram.com/_jen_kuba_/" target="_blank" className="contact-section__bottom-content__nav__links__link">Instagram</a>
            <a href="https://discordapp.com/users/76.gender" target="_blank" className="contact-section__bottom-content__nav__links__link">Discord</a>
          </div>
        </div>
      </div>
    </section>
  )
};