import React from "react";
import { Animation } from "gatsby-theme-portfolio-minimal/src/components/Animation";
import { Section } from "gatsby-theme-portfolio-minimal/src/components/Section";
import { PageSection } from "gatsby-theme-portfolio-minimal/src/types";
import { useLocalDataSource } from "./data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Quote from "../../../../content/images/blockquote.svg";
import "./index.css"

export function TestimonialSection(props: PageSection): React.ReactElement {
  const response = useLocalDataSource();
  const data = response.allTestimonialsJson.sections[0];

  return (
    <Animation type="fadeIn">
      <Section
        anchor={props.sectionId}
        heading={props.heading}
      >
        <section className="testimonial-container">
          <div className="slider-container">
            <blockquote>
              <img className="top-quote quote" src={Quote} alt="quote" />
              <img className="bottom-quote quote" src={Quote} alt="quote" />
            </blockquote>

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
                  <div className="content">
                    <p className="text">{review.text}</p>
                    <div className="info">
                      <p className="user">{review.name},</p>
                      <p>{review.gender}</p>
                      <p>{review.countryEmoji}</p>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </section>
      </Section>
    </Animation>
  );
}
