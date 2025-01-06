import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // i18n hook to get translations
import './DeviceCheck.css';  // Import the CSS file

// Device check component
const DeviceCheck = () => {
  const { t } = useTranslation();  // Assuming you're using i18next for translations
  const [isMobile, setIsMobile] = useState(false); // State to track if the device is mobile

  // Function to check device size
  const checkDevice = () => {
    if (window.innerWidth < 768) {  // 768px is the threshold for tablets
      setIsMobile(true);  // Set to true if the device is mobile
    } else {
      setIsMobile(false); // Set to false if the device is tablet/desktop
    }
  };

  // Hook to track the device size on load and resize
  useEffect(() => {
    checkDevice();  // Initial check
    window.addEventListener('resize', checkDevice);  // Listen for window resize

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  // If the device is mobile, show the error message
  if (isMobile) {
    return (
      <div className="device-error">
        <h1>{t('device_page.title')}</h1>
        <p>{t('device_page.errorMessage')}</p>
        <p>{t('device_page.suggestion')}</p>
      </div>
    );
  }

  // Return null or continue rendering other content for tablet/desktop devices
  return null;
};

export default DeviceCheck;