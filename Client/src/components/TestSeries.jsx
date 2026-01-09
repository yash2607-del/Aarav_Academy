import { ResourcePageTemplate } from './ResourcePageTemplate';
import { FaChartLine } from 'react-icons/fa';

const TestSeries = ({ onBackToHome }) => {
return (
<ResourcePageTemplate
title="Test Series"
subtitle="Attempt chapter-wise tests to analyze and improve your preparation"
icon={FaChartLine}
buttonText="Start Test"
pdfPathPrefix="test-series"
iconGradient="linear-gradient(135deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)"
onBackToHome={onBackToHome}
/>
);
};

export default TestSeries;
