import React from 'react';
import PageWrapper from '../../components/ui/PageWrapper';
import Title from '../../components/ui/Title';
import { useTranslation } from 'react-i18next';

const ForschungPage = () => {
  const { t, i18n } = useTranslation();
  return (
    <PageWrapper>
      <Title name={t('forschung.title')}></Title>
    </PageWrapper>
  );
};

export default ForschungPage;
