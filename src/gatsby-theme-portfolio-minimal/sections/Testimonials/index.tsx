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
                    <p className="text">{review.text}</p>
                    <div className="info">
                      <p className="user">{review.name},</p>
                      <p>{review.gender}</p>
                      <p>{review.countryEmoji}</p>
                    </div>
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
