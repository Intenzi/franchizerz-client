import React from 'react';
import styles from './DownloadBrochure.module.css';
import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';
import { FaFilePdf } from 'react-icons/fa';

const DownloadBrochure = ({ brochureFileName, brochureTitle }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', brochureFileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

 
  ;

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Download Brochure</h2>
      <p className={styles.description}>  Download the brochure for {brochureTitle} to learn more about the franchise details and opportunities.</p>

      <button className={styles.downloadButton} onClick={handleDownload}>
        <FaFilePdf className={styles.downloadIcon} /> Download Brochure
      </button>
    </div>
  );
};

export default DownloadBrochure;