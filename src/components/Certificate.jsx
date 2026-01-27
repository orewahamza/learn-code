import jsPDF from 'jspdf';

/**
 * Generates and downloads a high-quality PDF certificate
 * @param {Object} userData - User information { name }
 * @param {Object} courseData - Course information { title }
 */
export const generateCertificate = async (userData, courseData) => {
  // Create PDF (Landscape A4)
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'px',
    format: [1000, 700]
  });

  const width = doc.internal.pageSize.getWidth();
  const height = doc.internal.pageSize.getHeight();

  // 1. Background
  doc.setFillColor(10, 10, 10);
  doc.rect(0, 0, width, height, 'F');

  // 2. Main Border (Thick #1a1a1a)
  doc.setDrawColor(26, 26, 26);
  doc.setLineWidth(40);
  doc.rect(20, 20, width - 40, height - 40, 'D');

  // 3. Inner Decorative Border (Thin #EF4444)
  doc.setDrawColor(239, 68, 68);
  doc.setLineWidth(2);
  doc.rect(50, 50, width - 100, height - 100, 'D');

  // 4. Logo / Branding
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(28);
  doc.text('learnCode', width / 2 - 40, 100);
  doc.setTextColor(239, 68, 68);
  doc.text('STACK', width / 2 + 40, 100, { align: 'center' });

  // 5. Title
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(50);
  doc.setFont('helvetica', 'bolditalic');
  doc.text('CERTIFICATE OF COMPLETION', width / 2, 180, { align: 'center' });

  // 6. Certify Text
  doc.setTextColor(156, 163, 175);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'normal');
  doc.text('THIS IS TO CERTIFY THAT', width / 2, 240, { align: 'center' });

  // 7. Student Name
  doc.setTextColor(239, 68, 68);
  doc.setFontSize(64);
  doc.setFont('helvetica', 'bolditalic');
  doc.text(userData.name.toUpperCase(), width / 2, 320, { align: 'center' });

  // 8. Description
  doc.setTextColor(156, 163, 175);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'normal');
  doc.text('has successfully completed the intensive professional roadmap for', width / 2, 380, { align: 'center' });

  // 9. Course Name
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(36);
  doc.setFont('helvetica', 'bold');
  doc.text(courseData.title.toUpperCase(), width / 2, 440, { align: 'center' });

  // 10. Footer Details
  doc.setDrawColor(45, 45, 45);
  doc.setLineWidth(1);
  doc.line(100, 550, width - 100, 550);

  // Date
  const date = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  doc.setTextColor(107, 114, 128);
  doc.setFontSize(14);
  doc.text('ISSUED DATE', 150, 580);
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.text(date, 150, 610);

  // Seal / Badge
  doc.setDrawColor(239, 68, 68);
  doc.setLineWidth(2);
  doc.circle(width / 2, 580, 40, 'D');
  doc.setTextColor(239, 68, 68);
  doc.setFontSize(10);
  doc.text('VERIFIED', width / 2, 585, { align: 'center' });

  // ID
  const certId = Math.random().toString(36).substring(2, 10).toUpperCase();
  doc.setTextColor(107, 114, 128);
  doc.setFontSize(14);
  doc.text('VERIFICATION ID', width - 150, 580, { align: 'right' });
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.text(certId, width - 150, 610, { align: 'right' });

  // 11. Download
  doc.save(`${courseData.title.replace(/\s+/g, '_')}_Certificate.pdf`);
};

export default generateCertificate;
