import React from "react";
import { Animation } from "gatsby-theme-portfolio-minimal/src/components/Animation";
import { Section } from "gatsby-theme-portfolio-minimal/src/components/Section";
import * as classes from "./style.module.css";
import { StaticImage } from "gatsby-plugin-image";

export function OnlineTherapy(): React.ReactElement {
  return (
    <Animation type="fadeIn">
      <Section anchor="about">
        <div>
          <div className={classes.AboutImage}>
            <StaticImage
              src="../../../../content/images/terapia-online.avif"
              alt="Foto de perfil da psicóloga"
              placeholder="blurred"
              height={300}
              width={920}
            />
          </div>
          <div className={classes.AboutImageText}>
            <h1>Psicoterapia Online: cuidado e conexão no seu espaço</h1>
          </div>

          <div className={classes.AboutText}>
            <ul>
              <li>
                <p>
                  A <strong>psicoterapia online</strong> é um espaço de encontro
                  consigo mesmo — um lugar onde é possível expressar afetos,
                  reconhecer necessidades e desenvolver a capacidade de
                  estabelecer limites saudáveis. Nesse processo, você é
                  convidado a olhar para as próprias emoções com gentileza,
                  compreendendo como elas se relacionam com seus{" "}
                  <strong>valores e escolhas de vida.</strong>
                </p>
              </li>
            </ul>

            <ul>
              <li>
                <p>
                  A psicoterapia online oferece um espaço{" "}
                  <strong>seguro, acolhedor e acessível</strong> para que você
                  possa explorar{" "}
                  <strong>pensamentos, emoções e desafios pessoais</strong>, sem
                  precisar sair do conforto do lugar onde se sente à vontade. As
                  sessões acontecem por <strong>videochamada.</strong> Sendo
                  importante que você esteja em um ambiente tranquilo e seguro,
                  com uma conexão de internet estável, favorecendo uma
                  experiência confortável e sem interrupções.
                </p>
              </li>
            </ul>

            <ul>
              <li>
                <p>
                  Além disso, a <strong>psicoterapia online</strong> é uma
                  modalidade reconhecida e validada por importantes entidades
                  profissionais, como a{" "}
                  <strong>
                    Ordem dos Psicólogos Portugueses (OPP) e a American
                    Psychological Association (APA).
                  </strong>{" "}
                  Isso significa que os atendimentos seguem{" "}
                  <strong>padrões éticos, científicos</strong> e de{" "}
                  <strong>eficácia comprovada,</strong> oferecendo{" "}
                  <strong>segurança e confiança</strong> para quem busca apoio
                  psicológico à distância.
                </p>
              </li>
            </ul>

            <ul>
              <li>
                <p>
                  Você pode agendar uma{" "}
                  <strong>
                    videochamada gratuita introdutória de 15 minutos
                  </strong>{" "}
                  ou iniciar diretamente com uma sessão de{" "}
                  <strong>psicoterapia</strong>. A videochamada é um breve
                  encontro pensado para que você se familiarize com a psicóloga,
                  conheça o formato do atendimento online e compartilhe suas
                  principais <strong>preocupações e expectativas,</strong>{" "}
                  <strong>
                    sem se caracterizar como uma sessão de terapia.
                  </strong>{" "}
                  O processo terapêutico começa com as sessões de psicoterapia,
                  que têm duração aproximada de 50 minutos, realizadas por
                  videochamada em um ambiente seguro, confidencial e acolhedor,
                  garantindo atenção personalizada e suporte profissional ao
                  longo de toda a trajetória.
                </p>
              </li>
            </ul>
            <button className={classes.ScheduleButton}>
              <a
                target="_blank"
                href="https://api.whatsapp.com/message/X7NOGR2DKCOYP1?autoload=1&amp;app_absent=0"
                rel="noopener noreferrer"
              >
                Agende uma sessão introdutória gratuita de 15 minutos
              </a>
            </button>
          </div>
        </div>
      </Section>

      <Section heading="Abordagens Terapêuticas">
        <div className={classes.ExperienceText}>
          <StaticImage
            className={classes.ExperienceImage}
            src="../../../../content/images/trabalho-casa.avif"
            alt="Foto de perfil da psicóloga"
            placeholder="blurred"
          />
          <ul>
            <li>
              <p>
                Uma <strong>abordagem terapêutica</strong> é o{" "}
                <strong>conjunto de métodos</strong> e estratégias que o{" "}
                <strong>profissional</strong> utiliza para orientar o processo,
                ajudando você a entender suas{" "}
                <strong>
                  experiências, identificar padrões e desenvolver novas formas
                  de agir e se relacionar.
                </strong>
              </p>
            </li>

            <li>
              <p>
                Por meio de diferentes modelos terapêuticos, como a{" "}
                <strong>
                  Terapia de Aceitação e Compromisso (ACT), a Terapia
                  Cognitivo-Comportamental (TCC), a Terapia do Esquema e a
                  Psicologia Intercultural,
                </strong>{" "}
                é possível{" "}
                <strong>
                  aprender a aceitar emoções difíceis sem se deixar dominar por
                  elas
                </strong>
                , identificar padrões antigos que se repetem e encontrar formas
                mais saudáveis de interpretar os pensamentos, de viver e se
                relacionar.
              </p>
            </li>

            <li>
              <p>
                A terapia também ajuda a refletir sobre como{" "}
                <strong>experiências</strong> e{" "}
                <strong>contextos culturais</strong> influenciam a forma como
                sentimos e agimos, promovendo{" "}
                <strong>
                  compreensão, empatia e valorização das diferenças individuais
                </strong>
                . Com o acompanhamento qualificado, a psicoterapia oferece
                atenção personalizada, segurança e{" "}
                <strong>
                  estratégias práticas para lidar com os desafios do dia a dia,
                </strong>{" "}
                fortalecendo seus recursos internos e apoiando a construção de
                uma vida mais consciente, autêntica e alinhada com seus próprios
                valores e objetivos.
              </p>
            </li>

            <button className={classes.ScheduleButton}>
              <a
                target="_blank"
                href="https://api.whatsapp.com/message/X7NOGR2DKCOYP1?autoload=1&amp;app_absent=0"
                rel="noopener noreferrer"
              >
                Marcar Sessão
              </a>
            </button>
          </ul>
        </div>
        <div className={classes.SecondExperienceText}>
          <StaticImage
            className={classes.ExperienceImage}
            src="../../../../content/images/homem-laptop.avif"
            alt="Foto de perfil da psicóloga"
            placeholder="blurred"
          />
          <ul>
            <li>
              <p>
                <strong>ACT – Terapia de Aceitação e Compromisso</strong>
              </p>
            </li>

            <p className={classes.Caption}>
              (Desenvolvida por Steven C. Hayes, Kelly G. Wilson e Kirk D.
              Strosah na década de 1980).
            </p>

            <p>
              Indicada para quem deseja parar de lutar contra pensamentos e
              emoções negativas, aprendendo a desenvolver aceitação e a
              concentrar-se no que realmente tem valor na vida.
            </p>

            <li>
              <p>
                <strong>Terapia do Esquema</strong>
              </p>
            </li>

            <p className={classes.Caption}>
              (Desenvolvida por Jeffrey E. Young na década de 1990).
            </p>

            <p>
              Indicada para pessoas que desejam quebrar padrões emocionais e
              relacionais repetitivos, ou “esquemas” formados ainda na infância,
              que continuam a influenciar a forma de sentir, pensar e se
              relacionar.
            </p>

            <li>
              <p>
                <strong>Psicologia Intercultural</strong>
              </p>
            </li>

            <p className={classes.Caption}>
              (Criada por John W. Berry, Walter J. Lonner e Peter B. Smith na
              década de 1970/1980.)
            </p>

            <p>
              A Psicologia Intercultural estuda como a cultura influencia a
              forma de pensar, sentir e agir. No contexto clínico, valoriza as
              diferenças culturais e pessoais, reconhecendo que cada história é
              moldada pelas experiências e pelos contextos em que vivemos.
              <br />
              Essa abordagem promove empatia, inclusão e compreensão, sendo
              especialmente importante no acompanhamento de pessoas imigrantes,
              neurodiversas ou que transitam entre diferentes culturas.
            </p>
            <button className={classes.ScheduleButton}>
              <a
                target="_blank"
                href="https://api.whatsapp.com/message/X7NOGR2DKCOYP1?autoload=1&amp;app_absent=0"
                rel="noopener noreferrer"
              >
                Fale Comigo
              </a>
            </button>
          </ul>
        </div>
      </Section>

      <Section heading="Terapia Cognitivo-Comportamental (TCC)">
        <div className={classes.tcc}>
          <ul>
            <li>
              <p>
                A <strong>Terapia Cognitivo-Comportamental (TCC)</strong>{" "}
                (Criada por Aaron T. Beck na década de 1960) é uma abordagem
                psicológica reconhecida cientificamente por sua eficácia. Ela
                parte da ideia de que nossos{" "}
                <strong>
                  pensamentos, emoções e comportamentos estão interligados
                </strong>{" "}
                — e que, muitas vezes, são as interpretações que fazemos das
                situações que determinam como nos sentimos e reagimos.
              </p>
            </li>

            <li>
              <p>
                Durante o processo terapêutico, psicóloga e paciente caminham
                lado a lado na identificação de{" "}
                <strong>padrões de pensamento</strong> que podem causar
                sofrimento, trabalhando juntos para desenvolver novas formas de
                lidar com desafios e construir estratégias mais equilibradas e
                saudáveis para o dia a dia.
              </p>
            </li>

            <li>
              <p>
                A TCC costuma ser muito eficaz no tratamento de{" "}
                <strong>
                  ansiedade, depressão, fobias, estresse, dificuldades de
                  autoestima e questões relacionais
                </strong>
                , entre outros desafios emocionais e comportamentais. Por ser
                uma{" "}
                <strong>terapia estruturada e orientada para objetivos</strong>,
                oferece ferramentas práticas que ajudam a lidar com situações
                difíceis, promovendo o{" "}
                <strong>
                  autoconhecimento, a resolução de problemas e o fortalecimento
                  de recursos internos
                </strong>
                .
              </p>
            </li>

            <li>
              <p>
                O acompanhamento começa com uma avaliação inicial, em que são{" "}
                <strong>
                  compreendidos os sintomas, as necessidades e os objetivos de
                  cada pessoa
                </strong>
                . A partir daí, o processo é construído de forma{" "}
                <strong>
                  colaborativa, com metas pequenas e alcançáveis, respeitando
                  sempre o ritmo individual
                </strong>
                . Cada sessão é um espaço de reflexão e construção conjunta, com
                feedback constante para ajustar o foco e a frequência dos
                encontros, que podem ser semanais ou mais espaçados, conforme
                cada caso.
              </p>
            </li>

            <li>
              <p>
                Atualmente, muitas pessoas têm encontrado no{" "}
                <strong>atendimento psicológico online</strong> uma forma
                segura, acessível e eficaz de cuidar da saúde mental. A terapia
                à distância oferece a mesma qualidade do acompanhamento
                presencial, com a vantagem de permitir que o apoio chegue a quem
                precisa, independentemente do local onde esteja.{" "}
                <strong>
                  É uma oportunidade de priorizar o bem-estar, encontrar
                  equilíbrio e construir um espaço de escuta e acolhimento, no
                  conforto da sua casa.
                </strong>
              </p>
            </li>
          </ul>
        </div>
      </Section>
    </Animation>
  );
}
