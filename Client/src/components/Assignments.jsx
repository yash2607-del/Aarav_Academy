import { ResourcePageTemplate } from './ResourcePageTemplate';
import { FaClipboardList } from 'react-icons/fa';

const Assignments = ({ onBackToHome }) => {
return (
<ResourcePageTemplate
title="Assignments"
subtitle="Practice assignments to strengthen your concepts and skills"
icon={FaClipboardList}
buttonText="Download Assignment"
pdfPathPrefix="assignments"
iconGradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
onBackToHome={onBackToHome}
/>
);
};

export default Assignments;
