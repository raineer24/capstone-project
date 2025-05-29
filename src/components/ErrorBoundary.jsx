import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error){
    // Update state so next reender shows fallback UI
    return { hasError: true, error};
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error('Caught error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null});
  };

  render() {
    if (this.state.hasError) {}
  }
}
