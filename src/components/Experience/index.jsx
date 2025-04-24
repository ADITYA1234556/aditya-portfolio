import React from 'react';
import { motion } from 'framer-motion';
import {
  ExperienceSection,
  ExperienceContainer,
  SectionHeader,
  Title,
  Subtitle,
  Timeline,
  TimelineItem,
  TimelineConnector,
  ExperienceCard,
  Period,
  Role,
  Company,
  AchievementsList,
  AchievementItem
} from './styles';

const experienceData = [
  {
    period: "Sept 2024 - Present",
    role: "Devops Engineer",
    company: "Information Tech Consultants",
    achievements: [
      "Designed and implemented CI/CD pipelines using Jenkins, reducing deployment time by 50%.",
      "Deployed containerized Java Spring Boot applications using Docker and Kubernetes on Amazon EKS.",
      "Developed Python scripts to automate AWS EC2 instance management, scaling, and monitoring.",
      "Provisioned cloud infrastructure using Terraform and AWS CloudFormation.",
      "Utilized Ansible to automate server provisioning and configuration"
    ]
  },
  {
    period: "Nov 2023 - Sept 2024",
    role: "Infrastructure Engineer",
    company: "Barclays Bank",
    achievements: [
      "Designed and deployed Kubernetes-based microservices using Java Spring Boot.",
      "Monitored application performance using Splunk and CloudWatch",
      "Implemented security features within Spring Boot applications, including OAuth2 and JWT",
      "Developed Bash and Python scripts for automation"
    ]
  }
];

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <ExperienceContainer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Professional Journey
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Building innovative solutions and leading high-performance teams
          </Subtitle>
        </SectionHeader>

        <Timeline>
          {experienceData.map((experience, index) => (
            <TimelineItem
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <TimelineConnector />
              <ExperienceCard
                whileHover={{ scale: 1.02 }}
                transition={{ type: "tween" }}
              >
                <Period>{experience.period}</Period>
                <Role>{experience.role}</Role>
                <Company>{experience.company}</Company>
                <AchievementsList>
                  {experience.achievements.map((achievement, i) => (
                    <AchievementItem
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                    >
                      {achievement}
                    </AchievementItem>
                  ))}
                </AchievementsList>
              </ExperienceCard>
            </TimelineItem>
          ))}
        </Timeline>
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience;