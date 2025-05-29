import React from 'react';

const TestError = () => {
  // This will throw an error when rendered
  throw new Error('This is a test error to trigger the ErrorBoundary');
};

export default TestError;