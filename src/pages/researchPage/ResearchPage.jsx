import React, { useEffect, useState } from 'react';
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';
import { useTranslation } from 'react-i18next';
import {
  getResarchProjectsContent,
  getResearchProjectsList,
} from '../../lib/strapi/pages/researchprojects';
import { VStack, Box, Wrap, Image, Link, Spacer } from '@chakra-ui/react';
import Section from '../../components/ui/Section';
import { COLOR_SECONDARY, COLOR_TEXT_SECONDARY } from '../../constants/styles';
import renderMarkdown from '../../helpers/renderMarkdown';
import { v4 } from 'uuid';

const ResearchPage = () => {
  const { t, i18n } = useTranslation();

  const [resarchprojects, setResearchprojects] = useState([]);
  const [introduction, setIntroduction] = useState();

  useEffect(() => {
    getResearchProjectsList().then((res) => setResearchprojects(res));
    getResarchProjectsContent().then((res) => setIntroduction(res));
  }, [i18n.language]);

  return (
    <PageWrapper>
      <Title name={t('forschung.title')}></Title>
      {introduction && (
        <Box my={3} mb={6} color={COLOR_TEXT_SECONDARY} w="100%">
          {renderMarkdown(introduction)}
        </Box>
      )}
      <VStack spacing={3}>
        {resarchprojects.map((project) => (
          <ResearchProject project={project} key={v4()} />
        ))}
      </VStack>
    </PageWrapper>
  );
};

const ResearchProject = ({ project }) => {
  const { t, i18n } = useTranslation();
  return (
    <Section>
      <Wrap spacing={8} w="100%">
        <VStack flex="1" align="stretch">
          <Box textAlign="left" fontSize="lg" fontWeight="bold">
            {project.name} {project.year && `(${project.year})`}
          </Box>
          <Box textAlign="left" fontSize="md" color={COLOR_SECONDARY}>
            {t('by')} {project.authors} published at {project.conference}
          </Box>

          <Box>{renderMarkdown(project.description)}</Box>
          <Spacer />
          <Box>
            {project.paper && (
              <Link
                href={project.paper?.url}
                target="_blank"
                rel="noreferrer"
                textDecoration={'underline'}
              >
                {t('Read Paper')}
              </Link>
            )}
          </Box>
        </VStack>
        <Image
          src={project.image?.url}
          borderRadius={0}
          maxW={['100%', '100%', '100%', '40%', '30%']}
        />
      </Wrap>
    </Section>
  );
};

export default ResearchPage;
