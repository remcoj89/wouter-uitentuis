import './project-section.styles.scss';

const ProjectSection = ({projects}) => {
  if(!projects) {
    return;
  }


  return (
    <section className="project-container">
      {
        Object.values(projects).map((project, i) => {
          const {title, paragraph1, paragraph2, imageUrl} = project
          const isOdd = i % 2 !== 0;

          return (
          <div className={`project ${isOdd? 'project-odd' : ''}`} key={title}>
            <div className="project-content">
            <h3 className='project-title'>{title}</h3>
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
            </div>
            <img className='project-image' src={require(`../../../assets/images/${imageUrl}`)} alt={`Wouter Uitentuits ${title}`} />
          </div>
          )
        })
      }
    </section>
  )
};

export default ProjectSection;
