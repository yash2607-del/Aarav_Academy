import React from 'react';
import { ResourcePageTemplate } from "./ResourcePageTemplate";
import { SAMPLE_PAPERS_STRUCTURE } from "../../data/classStructure";
import { FaFileAlt } from "react-icons/fa";

const SamplePapers = ({ onBackToHome }) => {
  return (
    <ResourcePageTemplate
      title="Sample Papers"
      subtitle="Practice with exam-pattern sample papers for better preparation"
      icon={FaFileAlt}
      buttonText="Download Paper"
      pdfPathPrefix="sample-papers"
      onBackToHome={onBackToHome}
      classesData={SAMPLE_PAPERS_STRUCTURE}
    />
  );
};

export default SamplePapers;
