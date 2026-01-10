import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Animation } from "gatsby-theme-portfolio-minimal/src/components/Animation";
import { Section } from "gatsby-theme-portfolio-minimal/src/components/Section";
import { SocialProfiles } from "gatsby-theme-portfolio-minimal/src/components/SocialProfiles";
import { PageSection } from "gatsby-theme-portfolio-minimal/src/types";
import * as classes from "./style.module.css";
import { useLocalDataSource } from "gatsby-theme-portfolio-minimal/src/sections/Contact/data";

export function ContactSection(props: PageSection): React.ReactElement {
  const response = useLocalDataSource();
  const data = response.allContactJson.sections[0];

  return (
    <Animation type="fadeUp">
      <Section
        anchor={props.sectionId}
        heading={props.heading}
        additionalClasses={[classes.Contact]}
      >
        {data.description && (
          <p className={classes.Description}>{data.description}</p>
        )}
        <div className={classes.Profile}>
          {data.image.src && (
            <GatsbyImage
              className={classes.Avatar}
              image={data.image.src.childImageSharp.gatsbyImageData}
              alt={data.image.alt || `Profile ${data.name}`}
            />
          )}
          <div className={classes.ContactDetails}>
            <div className={classes.Name}>{data.name}</div>
            <div className={classes.ContactInfo}>
              <div>
                <a href={`mailto:${data.email}`}>{data.email}</a>
              </div>
              <div>
                <a
                  href={`https://api.whatsapp.com/message/X7NOGR2DKCOYP1?autoload=1&app_absent=0`}
                >
                  +351 910809408
                </a>
              </div>
            </div>
          </div>
        </div>
        {data.socialProfiles && (
          <SocialProfiles
            from={data.socialProfiles.from}
            showIcon={data.socialProfiles.showIcons}
          />
        )}
      </Section>
    </Animation>
  );
}
