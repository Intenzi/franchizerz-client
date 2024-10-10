import React from 'react';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { saveAs } from 'file-saver';
import { Document, Page, Text, pdf } from '@react-pdf/renderer';
import { FaFilePdf } from 'react-icons/fa';
import styles from './SideBrochure.module.css';

const SideBrochure = ({ brochureFileName, brandName }) => {
  const handleDownload = () => {
    // Construct the file URL relative to the public folder
    const fileUrl = `/brochures/${brochureFileName}`;
    
    // Create an anchor element and trigger the download
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = brochureFileName;
    link.click();
  };
  return (
    <div className={styles.sideContainer}> 
      <div className={styles.container}>
      <p className={styles.brochureText}>Download the {brandName} brochure to learn more!</p>
      <button className={styles.downloadButton} onClick={handleDownload}>
      <FaFilePdf className={styles.downloadIcon} /> Download Brochure
      </button>
      </div>
    </div>
  );
};

export default SideBrochure;
