import { ResourcePageTemplate } from './ResourcePageTemplate';
import { FaFileAlt } from 'react-icons/fa';

const StudyNotes = ({ onBackToHome }) => {
  return (
    <ResourcePageTemplate
      title="Study Notes"
      subtitle="Comprehensive chapter-wise notes for quick revision and better understanding"
      icon={FaFileAlt}
      buttonText="View Notes"
      pdfPathPrefix="notes"
      iconGradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      onBackToHome={onBackToHome}
    />
  );
};

export default StudyNotes;
