import React from "react";
import { Section } from "gatsby-theme-portfolio-minimal/src/components/Section";
import { PageSection } from "gatsby-theme-portfolio-minimal/src/types";
import { useLocalDataSource } from "./data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Quote from "../../../../content/images/blockquote.svg";
import "./index.css";
import { AnimatedSection } from "../../components/AnimatedComponents";
import { motion } from "framer-motion";

function getInitials(name: string): string {
  const letters = name.match(/\p{L}/gu) ?? [];
  return letters.slice(0, 2).join("").toUpperCase();
}

function StarRating(): React.ReactElement {
  return (
    <div className="rating" role="img" aria-label="Avaliação de 5 em 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.9l-5.8 3.06 1.1-6.47-4.7-4.58 6.5-.95L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialSection(props: Readonly<PageSection>): React.ReactElement {
  const response = useLocalDataSource();
  const data = response.allTestimonialsJson.sections[0];

  return (
    <Section
      anchor={props.sectionId}
      heading={props.heading}
    >
      <AnimatedSection direction="up">
        <section className="testimonial-container">
          <div className="slider-container">
            <motion.blockquote
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img className="top-quote quote" src={Quote} alt="quote" />
              <img className="bottom-quote quote" src={Quote} alt="quote" />
            </motion.blockquote>

            <Splide
              options={{
                perPage: 1,
                autoplay: true,
                speed: 1000,
                rewind: true,
                rewindByDrag: true,
              }}
            >
              {data.testimonials.map((review, i) => (
                <SplideSlide key={review.name + i} className={undefined}>
                  <motion.div 
                    className="content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <StarRating />
                    <p className="text">{review.text}</p>
                    <footer className="attribution">
                      <span className="avatar" aria-hidden="true">
                        {getInitials(review.name)}
                      </span>
                      <div className="person">
                        <p className="user">
                          {review.name}
                          <span className="gender" aria-hidden="true">
                            {review.gender}
                          </span>
                        </p>
                        <p className="meta">
                          <span className="flag" aria-hidden="true">
                            {review.countryEmoji}
                          </span>
                          Paciente em terapia online
                        </p>
                      </div>
                    </footer>
                  </motion.div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </section>
      </AnimatedSection>
    </Section>
  );
}
