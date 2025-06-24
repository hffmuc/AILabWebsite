import {
  Accordion,
  AccordionItem,
  Box,
  AccordionIcon,
  AccordionButton,
  AccordionPanel
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';
import { getFAQs } from '../../lib/strapi/pages/faq';
import renderMarkdown from '../../helpers/renderMarkdown';

const FAQPage = () => {
  const [faqContent, setFaqContent] = useState();

  useEffect(() => {
    getFAQs().then((res) => {
      setFaqContent(res);
      console.log(res);
    });
  }, []);

  return (
    <PageWrapper>
      <Title name="Frequently Asked Questions" />
      <Accordion allowMultiple w="100%">
        {faqContent &&
          faqContent.map((faq, index) => (
            <AccordionItem key={v4()}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {faq.attributes.Question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>{renderMarkdown(faq.attributes.Answer)}</AccordionPanel>
            </AccordionItem>
          ))}
      </Accordion>
    </PageWrapper>
  );
};

export default FAQPage;
