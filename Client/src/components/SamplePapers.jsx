import { ResourcePageTemplate } from './ResourcePageTemplate';
import { FaFileAlt } from 'react-icons/fa';

const SamplePapers = ({ onBackToHome }) => {
return (
<ResourcePageTemplate
title="Sample Papers"
subtitle="Practice with exam-pattern sample papers for better preparation"
icon={FaFileAlt}
buttonText="Download Paper"
pdfPathPrefix="sample-papers"
iconGradient="linear-gradient(135deg, #FA8BFF 0%, #2BD2FF 50%, #2BFF88 100%)"
onBackToHome={onBackToHome}
/>
);
};

export default SamplePapers;
