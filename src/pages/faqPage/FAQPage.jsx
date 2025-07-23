import {
  Accordion,
  AccordionItem,
  Box,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';
import { getFAQs } from '../../lib/strapi/pages/faq';
import renderMarkdown from '../../helpers/renderMarkdown';
import { useTranslation } from 'react-i18next';

const FAQPage = () => {
  const [faqContent, setFaqContent] = useState();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    getFAQs().then((res) => {
      setFaqContent(res);
      console.log(res);
    });
  }, [i18n.language]);

  return (
    <PageWrapper>
      <Title name={t('faq.title')} />
      <Accordion allowMultiple w="100%">
        {faqContent &&
          faqContent.map((faq, index) => (
            <AccordionItem key={v4()}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {faq.Question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                {renderMarkdown(faq.Answer)}
              </AccordionPanel>
            </AccordionItem>
          ))}
      </Accordion>
    </PageWrapper>
  );
};

export default FAQPage;
