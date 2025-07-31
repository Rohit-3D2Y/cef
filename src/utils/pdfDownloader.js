/**
 * Utility function to download PDF files
 */
export const downloadPDF = (pdfUrl, fileName = 'document.pdf') => {
  // Create a temporary anchor element
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = fileName;
  link.target = '_blank';
  
  // Append to body, click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Alternative method using fetch for more control
 */
export const downloadPDFWithFetch = async (pdfUrl, fileName = 'document.pdf') => {
  try {
    const response = await fetch(pdfUrl);
    const blob = await response.blob();
    
    // Create blob URL
    const blobUrl = window.URL.createObjectURL(blob);
    
    // Create and trigger download
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error('Error downloading PDF:', error);
    alert('Failed to download PDF. Please try again.');
  }
};
