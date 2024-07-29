import React from 'react';
import styles from './DownloadBrochure.module.css';
import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';
import { FaFilePdf } from 'react-icons/fa';

const DownloadBrochure = () => {
  const handleDownload = () => {
    // Dummy PDF creation using pdf library, replace with actual PDF generation logic
    const doc = (
      <div>Mahindra Scorpio Brochure</div>
    );

    pdf(doc).toBlob().then(blob => {
      saveAs(blob, 'Mahindra-Scorpio-Brochure.pdf');
    });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Download Brochure</h2>
      <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <button className={styles.downloadButton} onClick={handleDownload}>
        <FaFilePdf className={styles.downloadIcon} /> Download Brochure
      </button>
    </div>
  );
};

export default DownloadBrochure;