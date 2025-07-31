import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { downloadPDF, downloadPDFWithFetch } from '../utils/pdfDownloader';

const ReadMoreButton = ({ 
  pdfUrl, 
  fileName = 'document.pdf', 
  buttonText = 'Read More',
  className = '',
  variant = 'primary' 
}) => {
  const handleDownload = async () => {
    if (!pdfUrl) {
      alert('PDF URL not available');
      return;
    }

    // Show loading state
    const button = document.activeElement;
    const originalText = button.textContent;
    button.textContent = 'Downloading...';
    button.disabled = true;

    try {
      // Use fetch method for better error handling
      await downloadPDFWithFetch(pdfUrl, fileName);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      // Restore button state
      button.textContent = originalText;
      button.disabled = false;
    }
  };

  const baseStyles = "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 border border-gray-300",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
  };

  return (
    <motion.button
      onClick={handleDownload}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Download size={18} />
      {buttonText}
    </motion.button>
  );
};

export default ReadMoreButton;
