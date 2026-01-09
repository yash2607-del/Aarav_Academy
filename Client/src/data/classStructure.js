// Classes 6-10: Maths, Science, SST, English
// Classes 11-12: Science (Maths, Physics, Chemistry), Commerce (Accounts, Economics, Business Studies), Arts (Political Science, History, Geography)
// JEE: Maths, Physics, Chemistry
// NEET: Biology, Maths, Physics, Chemistry

export const CLASSES_STRUCTURE = [
  {
    id: '6',
    label: 'Class 6',
    subjects: [
      { id: 'maths', name: 'Mathematics', chapterCount: 10 },
      { id: 'science', name: 'Science', chapterCount: 10 },
      { id: 'sst', name: 'Social Studies', chapterCount: 10 },
      { id: 'english', name: 'English', chapterCount: 10 },
    ],
  },
  {
    id: '7',
    label: 'Class 7',
    subjects: [
      { id: 'maths', name: 'Mathematics', chapterCount: 10 },
      { id: 'science', name: 'Science', chapterCount: 10 },
      { id: 'sst', name: 'Social Studies', chapterCount: 10 },
      { id: 'english', name: 'English', chapterCount: 10 },
    ],
  },
  {
    id: '8',
    label: 'Class 8',
    subjects: [
      { id: 'maths', name: 'Mathematics', chapterCount: 10 },
      { id: 'science', name: 'Science', chapterCount: 10 },
      { id: 'sst', name: 'Social Studies', chapterCount: 10 },
      { id: 'english', name: 'English', chapterCount: 10 },
    ],
  },
  {
    id: '9',
    label: 'Class 9',
    subjects: [
      { id: 'maths', name: 'Mathematics', chapterCount: 15 },
      { id: 'science', name: 'Science', chapterCount: 15 },
      { id: 'sst', name: 'Social Studies', chapterCount: 15 },
      { id: 'english', name: 'English', chapterCount: 15 },
    ],
  },
  {
    id: '10',
    label: 'Class 10',
    subjects: [
      { id: 'maths', name: 'Mathematics', chapterCount: 15 },
      { id: 'science', name: 'Science', chapterCount: 15 },
      { id: 'sst', name: 'Social Studies', chapterCount: 15 },
      { id: 'english', name: 'English', chapterCount: 15 },
    ],
  },
  {
    id: '11',
    label: 'Class 11',
    streams: [
      {
        id: 'science',
        name: 'Science',
        subjects: [
          { id: 'maths', name: 'Mathematics', chapterCount: 14 },
          { id: 'physics', name: 'Physics', chapterCount: 15 },
          { id: 'chemistry', name: 'Chemistry', chapterCount: 14 },
        ],
      },
      {
        id: 'commerce',
        name: 'Commerce',
        subjects: [
          { id: 'accounts', name: 'Accountancy', chapterCount: 12 },
          { id: 'economics', name: 'Economics', chapterCount: 12 },
          { id: 'business', name: 'Business Studies', chapterCount: 12 },
        ],
      },
      {
        id: 'arts',
        name: 'Arts',
        subjects: [
          { id: 'polity', name: 'Political Science', chapterCount: 12 },
          { id: 'history', name: 'History', chapterCount: 12 },
          { id: 'geography', name: 'Geography', chapterCount: 12 },
        ],
      },
    ],
  },
  {
    id: '12',
    label: 'Class 12',
    streams: [
      {
        id: 'science',
        name: 'Science',
        subjects: [
          { id: 'maths', name: 'Mathematics', chapterCount: 13 },
          { id: 'physics', name: 'Physics', chapterCount: 15 },
          { id: 'chemistry', name: 'Chemistry', chapterCount: 16 },
        ],
      },
      {
        id: 'commerce',
        name: 'Commerce',
        subjects: [
          { id: 'accounts', name: 'Accountancy', chapterCount: 12 },
          { id: 'economics', name: 'Economics', chapterCount: 12 },
          { id: 'business', name: 'Business Studies', chapterCount: 12 },
        ],
      },
      {
        id: 'arts',
        name: 'Arts',
        subjects: [
          { id: 'polity', name: 'Political Science', chapterCount: 12 },
          { id: 'history', name: 'History', chapterCount: 12 },
          { id: 'geography', name: 'Geography', chapterCount: 12 },
        ],
      },
    ],
  },
  {
    id: 'jee',
    label: 'JEE',
    subjects: [
      { id: 'maths', name: 'Mathematics', chapterCount: 20 },
      { id: 'physics', name: 'Physics', chapterCount: 20 },
      { id: 'chemistry', name: 'Chemistry', chapterCount: 20 },
    ],
  },
  {
    id: 'neet',
    label: 'NEET',
    subjects: [
      { id: 'biology', name: 'Biology', chapterCount: 25 },
      { id: 'maths', name: 'Mathematics', chapterCount: 15 },
      { id: 'physics', name: 'Physics', chapterCount: 20 },
      { id: 'chemistry', name: 'Chemistry', chapterCount: 20 },
    ],
  },
];

// Sample Papers structure (Only Class 9-12, JEE, NEET)
export const SAMPLE_PAPERS_STRUCTURE = [
  {
    id: '9',
    label: 'Class 9',
    subjects: [
      { id: 'maths', name: 'Mathematics', chapterCount: 15 },
      { id: 'science', name: 'Science', chapterCount: 15 },
      { id: 'sst', name: 'Social Studies', chapterCount: 15 },
      { id: 'english', name: 'English', chapterCount: 15 },
    ],
  },
  {
    id: '10',
    label: 'Class 10',
    subjects: [
      { id: 'maths', name: 'Mathematics', chapterCount: 15 },
      { id: 'science', name: 'Science', chapterCount: 15 },
      { id: 'sst', name: 'Social Studies', chapterCount: 15 },
      { id: 'english', name: 'English', chapterCount: 15 },
    ],
  },
  {
    id: '11',
    label: 'Class 11',
    streams: [
      {
        id: 'science',
        name: 'Science',
        subjects: [
          { id: 'maths', name: 'Mathematics', chapterCount: 14 },
          { id: 'physics', name: 'Physics', chapterCount: 15 },
          { id: 'chemistry', name: 'Chemistry', chapterCount: 14 },
        ],
      },
      {
        id: 'commerce',
        name: 'Commerce',
        subjects: [
          { id: 'accounts', name: 'Accountancy', chapterCount: 12 },
          { id: 'economics', name: 'Economics', chapterCount: 12 },
          { id: 'business', name: 'Business Studies', chapterCount: 12 },
        ],
      },
      {
        id: 'arts',
        name: 'Arts',
        subjects: [
          { id: 'polity', name: 'Political Science', chapterCount: 12 },
          { id: 'history', name: 'History', chapterCount: 12 },
          { id: 'geography', name: 'Geography', chapterCount: 12 },
        ],
      },
    ],
  },
  {
    id: '12',
    label: 'Class 12',
    streams: [
      {
        id: 'science',
        name: 'Science',
        subjects: [
          { id: 'maths', name: 'Mathematics', chapterCount: 13 },
          { id: 'physics', name: 'Physics', chapterCount: 15 },
          { id: 'chemistry', name: 'Chemistry', chapterCount: 16 },
        ],
      },
      {
        id: 'commerce',
        name: 'Commerce',
        subjects: [
          { id: 'accounts', name: 'Accountancy', chapterCount: 12 },
          { id: 'economics', name: 'Economics', chapterCount: 12 },
          { id: 'business', name: 'Business Studies', chapterCount: 12 },
        ],
      },
      {
        id: 'arts',
        name: 'Arts',
        subjects: [
          { id: 'polity', name: 'Political Science', chapterCount: 12 },
          { id: 'history', name: 'History', chapterCount: 12 },
          { id: 'geography', name: 'Geography', chapterCount: 12 },
        ],
      },
    ],
  },
  {
    id: 'jee',
    label: 'JEE',
    subjects: [
      { id: 'maths', name: 'Mathematics', chapterCount: 20 },
      { id: 'physics', name: 'Physics', chapterCount: 20 },
      { id: 'chemistry', name: 'Chemistry', chapterCount: 20 },
    ],
  },
  {
    id: 'neet',
    label: 'NEET',
    subjects: [
      { id: 'biology', name: 'Biology', chapterCount: 25 },
      { id: 'maths', name: 'Mathematics', chapterCount: 15 },
      { id: 'physics', name: 'Physics', chapterCount: 20 },
      { id: 'chemistry', name: 'Chemistry', chapterCount: 20 },
    ],
  },
];
