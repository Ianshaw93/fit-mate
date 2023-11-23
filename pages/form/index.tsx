import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import NavComponent from '../../components/Navbar';

// client
const MyFormPage = () => {
  const router = useRouter();
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleLoad = () => {
      // Check if the confirmation page is loaded
      // Then redirect
      router.push('/');
    };

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', handleLoad);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('load', handleLoad);
      }
    };
  }, [router]);
  return (
    <>

    <NavComponent />

      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSfMg7M6XT_pH_J4Wz87Rzn7Gg_M1AmZmBTr_i1_YxeE6IKhYA/viewform?embedded=true" 
        width="640" 
        height="987" 
        frameborder="0" 
        marginheight="0" 
        marginwidth="0"
      >
        Loading…
      </iframe>





    </>
  )
}

export default MyFormPage;
