import React from 'react';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { saveAs } from 'file-saver';
import { Document, Page, Text, pdf } from '@react-pdf/renderer';
import { FaFilePdf } from 'react-icons/fa';
import styles from './SideBrochure.module.css'; // Assuming you're using CSS modules

const SideBrochure = ({ name }) => {
  const handleDownload = () => {
    const doc = (
      <Document>
        <Page>
          <Text>Mahindra Scorpio Brochure</Text>
        </Page>
      </Document>
    );

    pdf(doc).toBlob().then((blob) => {
      saveAs(blob, 'Mahindra-Scorpio-Brochure.pdf');
    });
  };

  return (
    <div className={styles.sideContainer}>
      <p className={styles.sideText}>
        <FormatQuoteIcon
          style={{
            fontSize: '2rem',
            marginRight: '0.5rem',
            transform: 'rotate(180deg)',
          }}
        />
        <em>
          Join the legacy of one of the world's most beloved brands. With {name}, you invest in a globally recognized name synonymous with quality, consistency, and customer satisfaction. Let's build a successful future together!
        </em>
        <FormatQuoteIcon style={{ fontSize: '2rem', marginLeft: '0.5rem' }} />
      </p>
      <div className={styles.container}>
        <h2 className={styles.heading}>Download Brochure</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <button className={styles.downloadButton} onClick={handleDownload}>
          <FaFilePdf className={styles.downloadIcon} /> Download Brochure
        </button>
      </div>
    </div>
  );
};

export default SideBrochure;
