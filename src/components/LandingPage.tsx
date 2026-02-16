"use client";

import { useEffect } from "react";

type Service = {
  id: string;
  title: string;
  description: string;
  outcome: string;
};

type CaseStudy = {
  name: string;
  sector: string;
  summary: string;
  impact: string;
  tags: string[];
};

const services: Service[] = [
  {
    id: "01",
    title: "Consultoria de Transformacion",
    description:
      "Definimos roadmap digital con foco en ingresos, eficiencia y velocidad operativa.",
    outcome: "Priorizacion de iniciativas de alto ROI"
  },
  {
    id: "02",
    title: "Fabrica de Software End-to-End",
    description:
      "Equipos de producto que disenan, construyen y evolucionan soluciones listas para escalar.",
    outcome: "Time-to-market acelerado con calidad enterprise"
  },
  {
    id: "03",
    title: "Modernizacion y Cloud",
    description:
      "Migramos plataformas legacy a arquitecturas cloud resilientes, seguras y observables.",
    outcome: "Reduccion de deuda tecnica y costos de operacion"
  },
  {
    id: "04",
    title: "Data, IA y Automatizacion",
    description:
      "Implementamos data products, modelos de IA y automatizaciones orientadas a negocio.",
    outcome: "Decisiones mas rapidas y procesos inteligentes"
  }
];

const cases: CaseStudy[] = [
  {
    name: "PulseBank Platform",
    sector: "Fintech",
    summary:
      "Core transaccional con onboarding digital, APIs seguras y motor de riesgo en tiempo real.",
    impact: "+41% conversion digital",
    tags: ["Next.js", "Node", "AWS", "Event-Driven"]
  },
  {
    name: "OmniRetail OS",
    sector: "Retail",
    summary:
      "Suite omnicanal de inventario, pricing y reposicion predictiva para cadena multi-pais.",
    impact: "-29% quiebres de stock",
    tags: ["React", "Python", "ML", "Data Lake"]
  },
  {
    name: "CareFlow Ecosystem",
    sector: "HealthTech",
    summary:
      "Plataforma de atencion integral con historia clinica interoperable y portal de pacientes.",
    impact: "+52% adopcion digital",
    tags: ["TypeScript", "PostgreSQL", "Azure", "HL7/FHIR"]
  }
];

const logos = [
  "NovaCorp",
  "Credify",
  "MediCore",
  "FlowCommerce",
  "Insurana",
  "Orbitel",
  "Grupo Atlas",
  "NorthLabs"
];

const stackGroups = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Vue", "Svelte"]
  },
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "Python", "Go", "GraphQL"]
  },
  {
    title: "Data & IA",
    items: ["PostgreSQL", "MongoDB", "dbt", "OpenAI", "Power BI"]
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"]
  }
];

const testimonials = [
  {
    quote:
      "DevHive paso de ser proveedor a socio de crecimiento. Entregaron producto, metricas y traccion comercial.",
    author: "Mariana Soto",
    role: "CEO, NovaRetail"
  },
  {
    quote:
      "La combinacion de estrategia y ejecucion tecnica fue sobresaliente. El impacto en negocio se noto en semanas.",
    author: "Daniel Vega",
    role: "CTO, Credify"
  },
  {
    quote:
      "Su fabrica de software nos dio velocidad sin perder control arquitectonico. Equipo top en comunicacion y delivery.",
    author: "Laura Jimenez",
    role: "Directora de Innovacion, MediCore"
  }
];

const process = [
  {
    step: "01",
    title: "Discovery y estrategia",
    text: "Alineamos objetivos, propuesta de valor y arquitectura de negocio-tecnologia."
  },
  {
    step: "02",
    title: "Diseno de experiencia y arquitectura",
    text: "Prototipamos flujos criticos y definimos base tecnica preparada para escalar."
  },
  {
    step: "03",
    title: "Build en sprints",
    text: "Entrega continua con QA automatizado, observabilidad y demos quincenales."
  },
  {
    step: "04",
    title: "Growth y optimizacion",
    text: "Iteramos con datos reales para aumentar conversion, adopcion y eficiencia."
  }
];

export function LandingPage() {
  useEffect(() => {
    const updateScroll = () => {
      const y = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? (y / maxScroll) * 100 : 0;

      document.documentElement.style.setProperty("--scroll-y", `${y}px`);
      document.documentElement.style.setProperty("--scroll-progress", `${progress}%`);
    };

    const updatePointer = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty("--pointer-x", `${x}%`);
      document.documentElement.style.setProperty("--pointer-y", `${y}%`);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.16 }
    );

    document.querySelectorAll<HTMLElement>(".reveal").forEach((el, index) => {
      const delay = (index % 5) * 80;
      el.style.transitionDelay = `${delay}ms`;
      observer.observe(el);
    });

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("mousemove", updatePointer, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("mousemove", updatePointer);
    };
  }, []);

  return (
    <main className="site-shell">
      <div className="scroll-progress" aria-hidden="true" />

      <header className="hero" id="top">
        <div className="ambient-layer" aria-hidden="true" />
        <div className="grid-layer" aria-hidden="true" />

        <nav className="container nav reveal">
          <a href="#top" className="brand">
            <span>DevHive</span>
            <small>Software Consulting</small>
          </a>

          <div className="nav-links">
            <a href="#servicios">Servicios</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#proceso">Proceso</a>
            <a href="#stack">Stack</a>
            <a href="#contacto">Contacto</a>
          </div>

          <a className="btn btn-nav" href="#contacto">
            Agendar reunion
          </a>
        </nav>

        <div className="container hero-grid">
          <section className="hero-copy reveal">
            <span className="pill">Consultora y Fabrica de Software</span>
            <h1>
              Creamos productos digitales
              <span>que venden, escalan y dominan su categoria.</span>
            </h1>
            <p>
              DevHive combina estrategia, diseno y desarrollo para convertir ideas en
              plataformas de negocio con resultados medibles.
            </p>

            <div className="hero-actions">
              <a href="#contacto" className="btn btn-primary magnetic">
                Iniciar proyecto
              </a>
              <a href="#proyectos" className="btn btn-ghost magnetic">
                Ver casos reales
              </a>
            </div>

            <div className="kpi-row">
              <article>
                <strong>120+</strong>
                <span>Proyectos entregados</span>
              </article>
              <article>
                <strong>97%</strong>
                <span>Clientes recurrentes</span>
              </article>
              <article>
                <strong>4.9/5</strong>
                <span>NPS promedio</span>
              </article>
            </div>
          </section>

          <aside className="hero-visual reveal" aria-label="Panel visual de capacidades">
            <div className="orb orb-a" />
            <div className="orb orb-b" />
            <div className="visual-card main-card">
              <p>Roadmap de transformacion</p>
              <h3>De la estrategia al producto en produccion</h3>
              <ul>
                <li>Discovery en 10 dias</li>
                <li>Arquitectura lista para escalar</li>
                <li>Release continuo con KPI de negocio</li>
              </ul>
            </div>
            <div className="visual-chip chip-one">UX + Product</div>
            <div className="visual-chip chip-two">Cloud Native</div>
            <div className="visual-chip chip-three">IA Aplicada</div>
          </aside>
        </div>

        <div className="trust-marquee reveal" aria-label="Empresas que confian en DevHive">
          <div className="marquee-track">
            {[...logos, ...logos].map((logo, idx) => (
              <span key={`${logo}-${idx}`}>{logo}</span>
            ))}
          </div>
        </div>
      </header>

      <section id="servicios" className="section container">
        <div className="section-head reveal">
          <span>Que hacemos</span>
          <h2>Servicios pensados para impacto real en negocio</h2>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card reveal">
              <div className="service-top">
                <span>{service.id}</span>
                <h3>{service.title}</h3>
              </div>
              <p>{service.description}</p>
              <strong>{service.outcome}</strong>
            </article>
          ))}
        </div>
      </section>

      <section id="proyectos" className="section case-section">
        <div className="container">
          <div className="section-head reveal">
            <span>Casos de exito</span>
            <h2>Plataformas desarrolladas para industrias exigentes</h2>
          </div>

          <div className="case-grid">
            {cases.map((item) => (
              <article key={item.name} className="case-card reveal">
                <div className="case-head">
                  <span>{item.sector}</span>
                  <strong>{item.impact}</strong>
                </div>
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
                <div className="tag-row">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proceso" className="section container">
        <div className="section-head reveal">
          <span>Metodo DevHive</span>
          <h2>Un sistema de entrega que reduce riesgo y acelera resultados</h2>
        </div>

        <div className="process-grid">
          {process.map((item) => (
            <article key={item.step} className="process-card reveal">
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="stack" className="section stack-section">
        <div className="container">
          <div className="section-head reveal">
            <span>Capacidad tecnica</span>
            <h2>Stack tecnologico enterprise con foco en escalabilidad</h2>
          </div>

          <div className="stack-grid">
            {stackGroups.map((group) => (
              <article key={group.title} className="stack-card reveal">
                <h3>{group.title}</h3>
                <div className="stack-items">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head reveal">
          <span>Prueba social</span>
          <h2>Lo que dicen equipos que ya escalaron con DevHive</h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article key={item.author} className="testimonial-card reveal">
              <p>{item.quote}</p>
              <div>
                <strong>{item.author}</strong>
                <span>{item.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contacto" className="section contact-section">
        <div className="container contact-grid reveal">
          <article>
            <span className="pill">Tu siguiente ventaja competitiva</span>
            <h2>Solicita una propuesta premium para tu producto digital</h2>
            <p>
              En 24 horas te enviamos una ruta inicial con alcance recomendado,
              arquitectura, tiempos y equipo ideal para ejecutar.
            </p>

            <div className="contact-bullets">
              <span>Respuesta en menos de 1 dia habil</span>
              <span>Diagnostico tecnico sin costo</span>
              <span>Plan de ejecucion con foco en ROI</span>
            </div>
          </article>

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
              Cuentanos tu reto
              <textarea
                rows={4}
                name="message"
                placeholder="Objetivo comercial, producto o problema a resolver"
                required
              />
            </label>

            <button type="submit" className="btn btn-primary">
              Solicitar propuesta
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-wrap">
          <div>
            <p>DevHive © {new Date().getFullYear()}</p>
            <small>Consultora y Fabrica de Software para empresas que quieren liderar.</small>
          </div>
          <div className="footer-links">
            <a href="#servicios">Servicios</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
            <a href="mailto:hola@devhive.com">hola@devhive.com</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
