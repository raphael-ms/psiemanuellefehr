import React from "react";
import { Section } from "gatsby-theme-portfolio-minimal/src/components/Section";
import * as classes from "./style.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { VideoQuoteSection } from "../VideoQuote";
import { AnimatedSection, StaggerContainer, StaggerItem, ScaleOnHover } from "../AnimatedComponents";

export function AboutSection(): React.ReactElement {
  return (
    <>
      <Section anchor="about" heading=" ">
        <div className={classes.AboutGrid}>
          <AnimatedSection direction="left" delay={0.2}>
            <div className={classes.AboutImage}>
              <StaticImage
                src="../../../../content/images/emanuelle-about.avif"
                alt="Foto de perfil da psicóloga"
                placeholder="blurred"
                width={320}
                height={320}
                style={{ transition: 'transform 0.3s ease' }}
                imgStyle={{ borderRadius: 'var(--border-radius)' }}
              />
            </div>
          </AnimatedSection>

          <StaggerContainer className={classes.AboutText} staggerDelay={0.15}>
            <StaggerItem>
              <p>
                Sou <b>psicóloga clínica</b>, especializada em oferecer apoio
                emocional e em criar espaços{" "}
                <b>seguros, acolhedores e confidenciais</b>, onde cada pessoa
                possa se expressar com liberdade. Utilizo a{" "}
                <b>Terapia Cognitivo-Comportamental (TCC)</b> e a Terapia do
                Esquema para auxiliar no manejo de ansiedade, depressão, fobia
                social e outras dificuldades emocionais, promovendo{" "}
                <b>
                  pensamentos mais adaptativos, estratégias de resolução de
                  problemas e expressão saudável das emoções.
                </b>
              </p>
            </StaggerItem>

            <StaggerItem>
              <p>
                A minha prática é marcada por um olhar{" "}
                <b>culturalmente sensível,</b>
                atenta a{" "}
                <b>
                  questões de género, interculturalidade e vínculos afetivos,
                </b>{" "}
                bem como ao acolhimento de pessoas <b>neurodiversas.</b>
              </p>
            </StaggerItem>

            <StaggerItem>
              <p>
                A minha trajetória pessoal e profissional reforçou em mim a
                compreensão de que cada contexto influencia profundamente a
                vivência de cada indivíduo, favorecendo o crescimento pessoal e a
                construção de novos caminhos.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </Section>

      <Section heading="Experiência Profissional">
        <StaggerContainer className={classes.ExperienceText} staggerDelay={0.15}>
          <StaggerItem>
            <p>
              Atuo como <b>psicóloga clínica</b>, com experiência em{" "}
              <b>atendimentos presenciaise online</b> desde 2020, oferecendo um{" "}
              <b>espaço seguro, de escuta ativa e livre de julgamentos</b>, onde
              cada pessoa possa explorar seus sentimentos, dificuldades e
              potencial de crescimento.
            </p>
          </StaggerItem>

          <StaggerItem>
            <p>
              Ao longo da minha trajetória, tenho acompanhado{" "}
              <b>adultos em diferentes fases da vida,</b> apoiando-os em questões
              como ansiedade, depressão, fobias sociais,{" "}
              <b>
                autoestima, adaptação a mudanças significativas e desafios nos
                relacionamentos interpessoais.
              </b>
            </p>
          </StaggerItem>

          <StaggerItem>
            <p>
              Minha experiência inclui a atuação no{" "}
              <b>Centro de Contacto do Serviço Nacional de Saúde (SNS)</b>, onde
              realizei acolhimento, triagem e orientação a utentes em situações de
              vulnerabilidade durante a pandemia, e no
              <b>Centro de Recursos para a Inclusão da APPDA Lisboa,</b>
              participando em projetos voltados à inclusão e ao desenvolvimento de
              pessoas com <b>neurodiversidade,</b> promovendo treino de{" "}
              <b>habilidades sociais, autonomia e qualidade de vida.</b>
            </p>
          </StaggerItem>

          <StaggerItem>
            <p>
              Atuo também com atendimento online, oferecendo acompanhamento
              maioritariamente a <b>pessoas emigrantes</b> e trabalhando com
              questões relacionadas a{" "}
              <b>
                relacionamentos amorosos, perturbação de hiperatividade e défice
                de atenção, perturbação do comportamento alimentar
              </b>{" "}
              entre outras especificidades. Essas experiências têm contribuído
              para um crescimento contínuo enquanto profissional, fortalecendo a
              capacidade de compreender e desenvolver{" "}
              <b>planos terapêuticos personalizados</b> para cada paciente de
              acordo <b>com o seu contexto e possibilidades.</b>
            </p>
          </StaggerItem>

          <StaggerItem>
            <p>
              Minha prática é guiada por um cuidado{" "}
              <b>ético, humano e culturalmente sensível,</b> que valoriza a{" "}
              <b>singularidade</b> de cada pessoa e busca promover{" "}
              <b>
                autoconhecimento, equilíbrio emocional e o fortalecimento dos
                recursos internos para lidar com os desafios da vida.
              </b>
            </p>
          </StaggerItem>

          <StaggerItem>
            <p>
              Além disso, mantenho um compromisso constante com o estudo e a
              atualização em técnicas <b>baseadas em evidências científicas,</b>
              integrando essas abordagens ao processo terapêutico de forma
              individualizada e eficaz. Também participo regularmente de
              intervisão e supervisão clínica, reconhecendo esses espaços como
              fundamentais para o aperfeiçoamento profissional e a qualidade do
              cuidado psicológico.
            </p>
          </StaggerItem>
        </StaggerContainer>
      </Section>

      <VideoQuoteSection />
      <Section heading="Qualificações">
        <StaggerContainer className={classes.QualificationsGrid} staggerDelay={0.2}>
          <StaggerItem>
            <ScaleOnHover scale={1.03}>
              <div className={classes.QualificationCard}>
                <h3>Licenciatura em Psicologia</h3>
                <span>2015 – 2018</span>
                <p>
                  Faculdade de Psicologia e Ciências da Educação
                  <br />
                  Universidade de Coimbra
                </p>
              </div>
            </ScaleOnHover>
          </StaggerItem>

          <StaggerItem>
            <ScaleOnHover scale={1.03}>
              <div className={classes.QualificationCard}>
                <h3>Mestrado em Psicologia da Educação</h3>
                <span>2018 – 2020</span>
                <p>
                  Faculdade de Psicologia e Ciências da Educação
                  <br />
                  Universidade de Coimbra
                </p>
              </div>
            </ScaleOnHover>
          </StaggerItem>

          <StaggerItem>
            <ScaleOnHover scale={1.03}>
              <div className={classes.QualificationCard}>
                <h3>Especialização em Terapia Cognitivo-Comportamental</h3>
                <span>2022 – 2024</span>
                <p>CRIAP</p>
              </div>
            </ScaleOnHover>
          </StaggerItem>
        </StaggerContainer>
      </Section>
    </>
  );
}
