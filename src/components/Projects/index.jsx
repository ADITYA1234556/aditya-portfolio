import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cloud, Activity, Database } from 'lucide-react';
import {
  ProjectsSection,
  ProjectsContainer,
  SectionHeader,
  Title,
  Subtitle,
  ProjectsGrid,
  ProjectCard,
  IconContainer,
  ProjectTitle,
  ProjectImpact,
  ProjectDescription,
  TechStack,
  TechTag
} from './styles';
import styled from 'styled-components';

const projectsData = [
  {
    title: "Personal Website following Production Best Practices",
    description: "Deployed an production grade set-up using Terraform, AWS, and Gitlab CI/CD following Production best practices.",
    impact: "Full monitoring and alerting",
    tech: ["AWS", "Terraform", "Istio", "Kubernetes", "Python"],
    icon: Cloud,
    url: "https://www.linkedin.com/posts/aditya-navaneethan-33b999173_terraform-aws-eks-activity-7319993302450130944-zErY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAClCM58BRhNzcIz5AfYbX4DkERvA30CTSL0"
  },
  {
    title: "Personal AI Chat Assistant",
    description: "Successfully delivered a Production-Grade Full-stack AI chatbot, built from scratch and deployed on a secure, scalable Kubernetes environment on AWS EKS.",
    impact: "My AI Assistant with more relevant and accurate responses",
    tech: ["AWS", "EKS", "Terraform", "React.js", "Node.js", "MongoDB", "Grafana", "Prometheus"],
    icon: Database
  },
  {
    title: "Multi-Cloud CI/CD Pipeline with AWS and Azure",
    description: "🚀 Implemented Multi-Cloud CI/CD Pipeline (AWS and Azure) with Kubernetes & Security Scanning! 🌐",
    impact: "Enhanced Workflow Efficiency",
    tech: ["AZURE", "GitLab CI", "AWS", "JAVA"],
    icon: Brain,
    url: "https://www.linkedin.com/posts/aditya-navaneethan-33b999173_devops-ciabrcd-gitlab-activity-7314977182664065024-vb-t?utm_source=share&utm_medium=member_desktop&rcm=ACoAAClCM58BRhNzcIz5AfYbX4DkERvA30CTSL0"
  },
  {
    title: "Blue Green Deployment",
    description: "🚀 Achieving Zero Downtime with Blue-Green Deployment on Kubernetes! 🚀",
    impact: "99/99% Uptime",
    tech: ["CI/CD", "Docker", "Kubernetes", "Jenkins"],
    icon: Activity,
    url: "https://www.linkedin.com/posts/aditya-navaneethan-33b999173_kubernetes-devops-jenkins-activity-7276557849516752896-QzwK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAClCM58BRhNzcIz5AfYbX4DkERvA30CTSL0"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const ClickableLink = styled.a`
    color: #61dafb; /* Example color, change as needed */
    text-decoration: underline;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
        color: #42a5f5; /* Darker shade on hover */
    }
`;

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <ProjectsContainer
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
            Impact Driven
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Transforming challenges into innovative solutions with measurable results
          </Subtitle>
        </SectionHeader>

        <ProjectsGrid>
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <IconContainer>
                <project.icon size={32} strokeWidth={1.5} />
              </IconContainer>

              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectImpact>{project.impact}</ProjectImpact>
              <ProjectDescription>{project.description}</ProjectDescription>

              <TechStack>
                {project.tech.map((tech, i) => (
                  <TechTag
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {tech}
                  </TechTag>
                ))}
              </TechStack>
              {project.url && (
                                <p>
                                    <ClickableLink href={project.url} target="_blank" rel="noopener noreferrer">
                                        Click Here
                                    </ClickableLink>
                                </p>
                            )}
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;