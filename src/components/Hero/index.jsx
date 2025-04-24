import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, Code, Server } from 'lucide-react';
import {
  HeroContainer, Grid, GridItem, Content, Badge, HeroTitle, TitleHighlight,
  SubtitleContainer, Subtitle, TypingText, StatsContainer, StatItem, StatContent,
  StatNumber, StatLabel, CTAContainer, SocialLinks, SocialLink, SocialLabel, TypedTextContainer,
  TerminalContainer, TerminalText
} from './styles';

const Hero = () => {
  const iconProps = { size: 24, className: "hero-icon", strokeWidth: 1.5 };
  const typingTextContent = "Devops, Public Cloud, Private Cloud, Hybrid Cloud solutions.";

  // Rotating Quotes
  const quotes = [
    "Building the Future",
    "Cloud-Native Excellence",
  ];
  const [currentQuote, setCurrentQuote] = useState(0);

  // Animated Terminal Prompt
  const terminalMessages = [
    "kubectl run mypod --image=nginx --dry-run=client -o yaml",
    "terraform state show aws_instance.my_instance",
    "aws sts get-caller-identity",
  ];
  const [currentTerminal, setCurrentTerminal] = useState(0);

  // Cycle quotes and terminal messages
  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 3000);
    const terminalInterval = setInterval(() => {
      setCurrentTerminal((prev) => (prev + 1) % terminalMessages.length);
    }, 3500);
    return () => {
      clearInterval(quoteInterval);
      clearInterval(terminalInterval);
    };
  }, [quotes.length, terminalMessages.length]);

  return (
    <HeroContainer id="home">

      <Content initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Badge initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }}>
          <Terminal {...iconProps} />
          <span>Devops Engineer</span>
        </Badge>

        <HeroTitle initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
          Innovating with <TitleHighlight>Cloud & Devops</TitleHighlight>
        </HeroTitle>

        <SubtitleContainer initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
          <Subtitle>Results-driven Devops Engineer specializing in</Subtitle>
          <TypedTextContainer>
            <TypingText>{typingTextContent}</TypingText>
          </TypedTextContainer>
        </SubtitleContainer>

        <StatsContainer initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
          <StatItem>
            <Code {...iconProps} />
            <StatContent>
              <StatNumber>99.99%</StatNumber>
              <StatLabel>Systems uptime</StatLabel>
            </StatContent>
          </StatItem>
          <StatItem>
            <Server {...iconProps} />
            <StatContent>
              <StatNumber>75%</StatNumber>
              <StatLabel>Faster Deployment</StatLabel>
            </StatContent>
          </StatItem>
        </StatsContainer>

        <CTAContainer initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}>
          <motion.div
            key={quotes[currentQuote]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '1rem', textAlign: 'center' }}
          >
            {quotes[currentQuote]}
          </motion.div>

          <TerminalContainer>
            <Terminal {...iconProps} />
            <TerminalText
              key={terminalMessages[currentTerminal]}
              initial={{ width: 0 }}
              animate={{ width: 'auto' }}
              transition={{ duration: 1.5, ease: 'linear' }}
            >
              {terminalMessages[currentTerminal]}
            </TerminalText>
          </TerminalContainer>
        </CTAContainer>

        <SocialLinks initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }}>
          {[
            { icon: Github, link: "https://github.com/ADITYA1234556", label: "GitHub" },
            { icon: Linkedin, link: "https://www.linkedin.com/in/aditya-navaneethan-33b999173/", label: "LinkedIn" },
            { icon: Mail, link: "mailto:adityanavaneethan98@gmail.com", label: "Email" },
          ].map((social, index) => (
            <SocialLink
              key={social.label}
              href={social.link}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <social.icon {...iconProps} />
              <SocialLabel>{social.label}</SocialLabel>
            </SocialLink>
          ))}
        </SocialLinks>
      </Content>
    </HeroContainer>
  );
};

export default Hero;