import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';
import { useState, useEffect } from 'react';
import { getContactContent } from '../../lib/strapi/pages/contact';
import renderMarkdown from '../../helpers/renderMarkdown';
import { useTranslation } from 'react-i18next';

const ContactPage = () => {
  const [content, setContent] = useState('');
  const { t, i18n } = useTranslation();

  useEffect(() => {
    getContactContent().then((res) => {
      setContent(res);
    });
  }, [i18n.language]);

  return (
    <PageWrapper>
      <Title name={t('contact.title')} textAlign="left" />
      {renderMarkdown(content)}
    </PageWrapper>
  );
};

export default ContactPage;
