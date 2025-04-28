import clsx from 'clsx';
import { useState } from 'react';
import styles from './styles.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

const PersonalProjectsList = [
    {
        title:'HopCuisson',
        description:'HopCuisson est une application de cuisine collaborative qui permet aux utilisateurs de découvrir, partager et enregistrer des recettes.',
        codeLink:'https://gitlab.com/NassimTaoussi/hop-cuisson',
        projectLink:'',
        stack: [
            'PHP',
            'Symfony',
            'Bootstrap',
            'MySQL',
        ],
        image:'img/projects/Hop-Cuisson.png',
    },
    {
      title:'SnowTricks',
      description:'Création d\'un site communautaire de partage de figures sur la thématique du snowboard.',
      codeLink:'https://gitlab.com/NassimTaoussi/SnowTricks',
      projectLink:'',
      stack:[
            'PHP',
            'Symfony',
            'Bootstrap',
            'Javascript',
            'Jquery',
            'MySQL',
        ],
        image:'img/projects/SnowTricks.png',
  },
  {
      title:'Todolist',
      description:'Amélioration d\'une application existante qui a vocation à permettre à un utilisateur de gérer ses tâches quotidiennes',
      codeLink:'https://gitlab.com/NassimTaoussi/todolist',
      projectLink:'',
      stack:[
        'PHP',
        'Symfony',
        'Bootstrap',
        'MySQL',
    ],
    image:'img/projects/Todolist.png',
  },
  {
      title:'Blog',
      description:'Projet qui consiste a réaliser un "Blog" en PHP dans le cadre de ma formation PHP/Symfony avec OpenClassrooms, réalisé selon l\'architecture MVC.',
      codeLink:'https://gitlab.com/NassimTaoussi/Blog',
      projectLink:'',
      stack:[
          'PHP',
          'Bootstrap',
          'MySQL',
          'Twig'
      ],
      image:'img/projects/Blog.png',
  },
  {
      title:'Bilemo',
      description:'Développement d\'une API REST pour l\'entreprise BileMo qui offre toute une sélection de téléphones mobiles haut de gamme',
      codeLink:'https://gitlab.com/NassimTaoussi/bilemo',
      projectLink:'',
      stack:[
        'PHP',
        'ApiPlatform',
    ],
    image:'img/projects/Bilemo.png',
  },
  {
      title:'Festival des films de plein air',
      description:'Réalisation d\'une maquette pour l\'organisatrice du festival des Films de Plein Air',
      codeLink:'https://gitlab.com/NassimTaoussi/maquette-festival-des-films-de-plein-air',
      projectLink:'',
      stack:[
        'HTML',
        'CSS',
    ],
    image:'img/projects/MovieOutdoor.png',
  },
  {
      title:'Pokedex',
      description:'',
      codeLink:'https://gitlab.com/NassimTaoussi/pokedex',
      projectLink:'',
      stack:[
        'PHP',
        'HTML',
        'CSS',
        'MySQL',
    ],
    image:'img/projects/Pokedex.png',
  },
];

function PersonalProject({ project, onClick }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="d-flex justify-content-center">
        <Card className={styles.cardProject} onClick={() => onClick(project)} style={{ cursor: 'pointer' }}>
          <Card.Img className={styles.imageProject} variant="top" src={project.image} />
        </Card>
      </div>
    </div>
  );
}

export default function PersonalProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClose = () => setSelectedProject(null);
  const handleShow = (project) => setSelectedProject(project);

  return (
    <section className={styles.personalProjects}>
      <div className="container">
        <h3 className={styles.personalProjectTitlePage}>Projets Personnels</h3>
        <div className="row justify-content-center">
          {PersonalProjectsList.map((project, idx) => (
            <PersonalProject key={idx} project={project} onClick={handleShow} />
          ))}
        </div>
      </div>

      {/* MODAL AVEC DÉTAILS */}
      <Modal show={!!selectedProject} onHide={handleClose} centered size="lg" backdrop="static" keyboard={false}>
        {selectedProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={selectedProject.image} alt={selectedProject.title} className="img-fluid mb-3 mx-auto d-block" />
              <p>{selectedProject.description}</p>

              <h6>Stack technique :</h6>
              <div className="mb-3">
                {selectedProject.stack.map((tech, i) => (
                  <Badge key={i} bg="primary" className="me-2 mb-2">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="d-flex gap-2">
                {selectedProject.codeLink && (
                  <Button variant="success" href={selectedProject.codeLink} target="_blank">
                    Voir le code
                  </Button>
                )}
                {selectedProject.projectLink && (
                  <Button variant="secondary" href={selectedProject.projectLink} target="_blank">
                    Voir le projet
                  </Button>
                )}
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>
    </section>
  );
}