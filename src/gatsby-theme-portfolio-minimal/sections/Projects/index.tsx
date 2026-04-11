import React from 'react';
import { Section } from 'gatsby-theme-portfolio-minimal/src/components/Section';
import { Slider } from 'gatsby-theme-portfolio-minimal/src/components/Slider';
import { Button, ButtonType } from 'gatsby-theme-portfolio-minimal/src/components/Button';
import { Project } from 'gatsby-theme-portfolio-minimal/src/components/Project';
import { PageSection } from 'gatsby-theme-portfolio-minimal/src/types';
import * as classes from './style.module.css';
import { useLocalDataSource } from 'gatsby-theme-portfolio-minimal/src/sections/Projects/data';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../../components/AnimatedComponents';

export function ProjectsSection(props: Readonly<PageSection>): React.ReactElement {
    const response = useLocalDataSource();
    const data = response.allProjectsJson.sections[0];

    return (
        <Section anchor={props.sectionId} heading={props.heading}>
            <StaggerContainer staggerDelay={0.2}>
                <Slider additionalClasses={[classes.Projects]}>
                    {data.projects.map((project, key) => {
                        return project.visible ? (
                            <StaggerItem key={project.title + key}>
                                <Project index={key} data={project} />
                            </StaggerItem>
                        ) : null;
                    })}
                </Slider>
            </StaggerContainer>
            {data.button !== undefined && data.button.visible !== false && (
                <AnimatedSection className={classes.MoreProjects} direction="up" delay={0.4}>
                    <div>teste</div>
                    <Button
                        type={ButtonType.LINK}
                        externalLink={true}
                        url={data.button.url}
                        label={data.button.label}
                    />
                </AnimatedSection>
            )}
        </Section>
    );
}
