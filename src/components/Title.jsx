import React from 'react';
import { useTranslation } from 'react-i18next';

const Title = () => {
  const { t } = useTranslation();
  return (
    <div className="mb-0">
      <h1 className="text-center display-4 text-muted mt-4">{t('title')}</h1>
    </div>
  );
};

export default Title;
