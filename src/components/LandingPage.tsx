"use client";

import { useEffect } from "react";

const services = [
  {
    title: "Consultoría Tecnológica",
    description:
      "Alineamos negocio y tecnología para acelerar resultados con roadmap, arquitectura y gobierno digital."
  },
  {
    title: "Fábrica de Software",
    description:
      "Equipos dedicados para construir productos robustos, escalables y listos para producción en ciclos ágiles."
  },
  {
    title: "Modernización de Sistemas",
    description:
      "Migramos plataformas legacy a ecosistemas cloud con mejor rendimiento, seguridad y mantenibilidad."
  },
  {
    title: "Inteligencia de Datos",
    description:
      "Transformamos datos dispersos en indicadores accionables con dashboards, automatizaciones y analítica."
  }
];

const projects = [
  {
    name: "FinFlow Core",
    type: "Banca Digital",
    impact: "+38% en eficiencia operativa",
    summary:
      "Plataforma transaccional con APIs seguras, onboarding digital y motores de aprobación en tiempo real."
  },
  {
    name: "RetailPulse AI",
    type: "Retail",
    impact: "-27% en quiebres de stock",
    summary:
      "Sistema predictivo de demanda y reposición automática integrado con POS y ERP en 120 tiendas."
  },
  {
    name: "HealthGrid Care",
    type: "Salud",
    impact: "+52% de adopción digital",
    summary:
      "Portal omnicanal para pacientes, historia clínica interoperable y gestión inteligente de citas."
  }
];

const testimonials = [
  {
    quote:
      "DevHive se convirtió en nuestro socio tecnológico. Pasamos de ideas dispersas a una plataforma rentable en 5 meses.",
    author: "Mariana Soto",
    role: "CEO, NovaRetail"
  },
  {
    quote:
      "Su equipo combina visión estratégica con ejecución impecable. El time-to-market mejoró de forma radical.",
    author: "Daniel Vega",
    role: "CTO, Credify"
  },
  {
    quote:
      "La fábrica de software de DevHive nos permitió escalar sin aumentar complejidad interna.",
    author: "Laura Jiménez",
    role: "Directora de Innovación, MediCore"
  }
];

const stack = [
  "Next.js",
  "Node.js",
  "NestJS",
  "Python",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Power BI",
  "OpenAI"
];

export function LandingPage() {
  useEffect(() => {
    const updateParallax = () => {
      const y = window.scrollY;
      document.documentElement.style.setProperty("--scroll-y", `${y}px`);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    updateParallax();
    window.addEventListener("scroll", updateParallax, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateParallax);
    };
  }, []);

  return (
    <main>
      <header className="hero parallax-layer">
        <div className="noise" aria-hidden="true" />
        <nav className="container nav reveal">
          <a href="#" className="brand">
            DevHive
          </a>
          <div className="nav-links">
            <a href="#servicios">Servicios</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#stack">Stack</a>
            <a href="#contacto">Contacto</a>
          </div>
        </nav>

        <div className="container hero-grid reveal">
          <div>
            <span className="badge">Consultora y Fábrica de Software</span>
            <h1>
              Construimos productos digitales que venden, escalan y lideran mercados.
            </h1>
            <p>
              En <strong>DevHive</strong> diseñamos estrategia, tecnología y ejecución para
              empresas que necesitan velocidad sin sacrificar calidad.
            </p>
            <div className="hero-cta">
              <a href="#contacto" className="btn btn-primary">
                Agendar diagnóstico
              </a>
              <a href="#proyectos" className="btn btn-ghost">
                Ver casos de éxito
              </a>
            </div>
            <div className="hero-metrics">
              <div>
                <strong>80+</strong>
                <span>Proyectos entregados</span>
              </div>
              <div>
                <strong>96%</strong>
                <span>Clientes recurrentes</span>
              </div>
              <div>
                <strong>4.8/5</strong>
                <span>Satisfacción promedio</span>
              </div>
            </div>
          </div>

          <div className="hero-card floating">
            <p className="chip">Roadmap de Transformación</p>
            <h3>De la visión al producto en producción</h3>
            <ul>
              <li>Discovery estratégico y definición de alcance</li>
              <li>Arquitectura escalable + diseño UX de alto impacto</li>
              <li>Entrega continua con métricas de negocio</li>
            </ul>
          </div>
        </div>
      </header>

      <section id="servicios" className="section container">
        <div className="section-head reveal">
          <span>Nuestro enfoque</span>
          <h2>Servicios orientados a resultados comerciales</h2>
        </div>
        <div className="service-grid">
          {services.map((item) => (
            <article key={item.title} className="card reveal">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="proyectos" className="section project-section parallax-strip">
        <div className="container">
          <div className="section-head reveal">
            <span>Casos destacados</span>
            <h2>Proyectos de software con impacto medible</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.name} className="project-card reveal">
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <strong>{project.impact}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head reveal">
          <span>Metodología DevHive</span>
          <h2>Cómo convertimos ideas en productos rentables</h2>
        </div>
        <div className="timeline">
          <article className="timeline-item reveal">
            <h3>01. Diagnóstico estratégico</h3>
            <p>Evaluamos objetivos, riesgos y oportunidades para priorizar iniciativas de mayor ROI.</p>
          </article>
          <article className="timeline-item reveal">
            <h3>02. Diseño y arquitectura</h3>
            <p>Definimos experiencia de usuario, componentes críticos y arquitectura preparada para escalar.</p>
          </article>
          <article className="timeline-item reveal">
            <h3>03. Desarrollo ágil</h3>
            <p>Construimos con entregas quincenales, QA continuo y trazabilidad completa del avance.</p>
          </article>
          <article className="timeline-item reveal">
            <h3>04. Evolución continua</h3>
            <p>Optimizamos producto con datos reales para aumentar adopción, conversión y valor de negocio.</p>
          </article>
        </div>
      </section>

      <section id="stack" className="section stack-section">
        <div className="container">
          <div className="section-head reveal">
            <span>Arquitectura moderna</span>
            <h2>Stack tecnológico con estándares enterprise</h2>
          </div>
          <div className="stack-cloud reveal">
            {stack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head reveal">
          <span>Confianza del mercado</span>
          <h2>Testimonios de clientes finales</h2>
        </div>
        <div className="testimonials">
          {testimonials.map((item) => (
            <article key={item.author} className="testimonial reveal">
              <p>{item.quote}</p>
              <div>
                <strong>{item.author}</strong>
                <span>{item.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contacto" className="section contact-section parallax-layer">
        <div className="container contact-wrap reveal">
          <div>
            <span className="badge">Hablemos de tu próximo producto</span>
            <h2>Solicita una propuesta de software a medida con DevHive</h2>
            <p>
              Cuéntanos tu objetivo y te devolvemos un plan de ejecución con alcance,
              tiempos y equipo recomendado.
            </p>
          </div>
          <form className="contact-form" action="#" method="post">
            <label>
              Nombre
              <input type="text" name="name" placeholder="Tu nombre" required />
            </label>
            <label>
              Correo corporativo
              <input type="email" name="email" placeholder="empresa@correo.com" required />
            </label>
            <label>
              Empresa
              <input type="text" name="company" placeholder="Nombre de tu empresa" required />
            </label>
            <label>
              ¿Qué necesitas construir?
              <textarea
                name="message"
                rows={4}
                placeholder="Describe tu proyecto, reto o meta comercial"
                required
              />
            </label>
            <button type="submit" className="btn btn-primary">
              Enviar solicitud
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-wrap">
          <p>DevHive © {new Date().getFullYear()} | Consultora y Fábrica de Software</p>
          <a href="mailto:hola@devhive.com">hola@devhive.com</a>
        </div>
      </footer>
    </main>
  );
}
