import React from "react";
import { Animation } from "gatsby-theme-portfolio-minimal/src/components/Animation";
import { Section } from "gatsby-theme-portfolio-minimal/src/components/Section";
import * as classes from "./style.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { VideoQuoteSection } from "../VideoQuote";

export function AboutSection(): React.ReactElement {
  return (
    <Animation type="fadeIn">
      <Section anchor="about" heading=" ">
        <div className={classes.AboutGrid}>
          <div className={classes.AboutImage}>
            <StaticImage
              src="../../../../content/images/emanuelle-about.avif"
              alt="Foto de perfil da psicóloga"
              placeholder="blurred"
              width={320}
              height={320}
            />
          </div>

          <div className={classes.AboutText}>
            <p>
              Sou <u>psicóloga clínica</u>, especializada em oferecer apoio
              emocional e em criar espaços{" "}
              <u>seguros, acolhedores e confidenciais</u>, onde cada pessoa
              possa se expressar com liberdade. Utilizo a{" "}
              <u>Terapia Cognitivo-Comportamental (TCC)</u> e a Terapia do
              Esquema para auxiliar no manejo de ansiedade, depressão, fobia
              social e outras dificuldades emocionais, promovendo{" "}
              <u>
                pensamentos mais adaptativos, estratégias de resolução de
                problemas e expressão saudável das emoções.
              </u>
            </p>

            <p>
              A minha prática é marcada por um olhar{" "}
              <u>culturalmente sensível,</u>
              atenta a{" "}
              <u>
                questões de género, interculturalidade e vínculos afetivos,
              </u>{" "}
              bem como ao acolhimento de pessoas <u>neurodiversas.</u>
            </p>

            <p>
              A minha trajetória pessoal e profissional reforçou em mim a
              compreensão de que cada contexto influencia profundamente a
              vivência de cada indivíduo, favorecendo o crescimento pessoal e a
              construção de novos caminhos.
            </p>
          </div>
        </div>
      </Section>

      <Section heading="Experiência Profissional">
        <div className={classes.ExperienceText}>
          <p>
            Atuo como <u>psicóloga clínica</u>, com experiência em{" "}
            <u>atendimentos presenciaise online</u> desde 2020, oferecendo um{" "}
            <u>espaço seguro, de escuta ativa e livre de julgamentos</u>, onde
            cada pessoa possa explorar seus sentimentos, dificuldades e
            potencial de crescimento.
          </p>

          <p>
            Ao longo da minha trajetória, tenho acompanhado{" "}
            <u>adultos em diferentes fases da vida,</u> apoiando-os em questões
            como ansiedade, depressão, fobias sociais,{" "}
            <u>
              autoestima, adaptação a mudanças significativas e desafios nos
              relacionamentos interpessoais.
            </u>
          </p>

          <p>
            Minha experiência inclui a atuação no{" "}
            <u>Centro de Contacto do Serviço Nacional de Saúde (SNS)</u>, onde
            realizei acolhimento, triagem e orientação a utentes em situações de
            vulnerabilidade durante a pandemia, e no
            <u>Centro de Recursos para a Inclusão da APPDA Lisboa,</u>
            participando em projetos voltados à inclusão e ao desenvolvimento de
            pessoas com <u>neurodiversidade,</u> promovendo treino de{" "}
            <u>habilidades sociais, autonomia e qualidade de vida.</u>
          </p>

          <p>
            Atuo também com atendimento online, oferecendo acompanhamento
            maioritariamente a <u>pessoas emigrantes</u> e trabalhando com
            questões relacionadas a{" "}
            <u>
              relacionamentos amorosos, perturbação de hiperatividade e défice
              de atenção, perturbação do comportamento alimentar
            </u>{" "}
            entre outras especificidades. Essas experiências têm contribuído
            para um crescimento contínuo enquanto profissional, fortalecendo a
            capacidade de compreender e desenvolver{" "}
            <u>planos terapêuticos personalizados</u> para cada paciente de
            acordo <u>com o seu contexto e possibilidades.</u>
          </p>

          <p>
            Minha prática é guiada por um cuidado{" "}
            <u>ético, humano e culturalmente sensível,</u> que valoriza a{" "}
            <u>singularidade</u> de cada pessoa e busca promover{" "}
            <u>
              autoconhecimento, equilíbrio emocional e o fortalecimento dos
              recursos internos para lidar com os desafios da vida.
            </u>
          </p>

          <p>
            Além disso, mantenho um compromisso constante com o estudo e a
            atualização em técnicas <u>baseadas em evidências científicas,</u>
            integrando essas abordagens ao processo terapêutico de forma
            individualizada e eficaz. Também participo regularmente de
            intervisão e supervisão clínica, reconhecendo esses espaços como
            fundamentais para o aperfeiçoamento profissional e a qualidade do
            cuidado psicológico.
          </p>
        </div>
      </Section>

      <VideoQuoteSection />
      <Section heading="Qualificações">
        <div className={classes.QualificationsGrid}>
          <div className={classes.QualificationCard}>
            <h3>Licenciatura em Psicologia</h3>
            <span>2015 – 2018</span>
            <p>
              Faculdade de Psicologia e Ciências da Educação
              <br />
              Universidade de Coimbra
            </p>
          </div>

          <div className={classes.QualificationCard}>
            <h3>Mestrado em Psicologia da Educação</h3>
            <span>2018 – 2020</span>
            <p>
              Faculdade de Psicologia e Ciências da Educação
              <br />
              Universidade de Coimbra
            </p>
          </div>

          <div className={classes.QualificationCard}>
            <h3>Especialização em Terapia Cognitivo-Comportamental</h3>
            <span>2022 – 2024</span>
            <p>CRIAP</p>
          </div>
        </div>
      </Section>
    </Animation>
  );
}
