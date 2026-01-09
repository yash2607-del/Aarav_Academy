import { ResourcePageTemplate } from './ResourcePageTemplate';
import { FaBookOpen } from 'react-icons/fa';

const NcertSolutions = ({ onBackToHome }) => {
return (
<ResourcePageTemplate
title="NCERT Solutions"
subtitle="Step-by-step solutions to all NCERT textbook questions"
icon={FaBookOpen}
buttonText="View Solution"
pdfPathPrefix="ncert"
iconGradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
onBackToHome={onBackToHome}
/>
);
};

export default NcertSolutions;
