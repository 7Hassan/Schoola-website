import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { preloadImages } from '../assets/preloadedImages';

export const useSplashLoader = () => {
  const [loading, setLoading] = useState(true);
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    const visitedBefore = Cookies.get('visitedBefore');

    const handleSplash = async () => {
      if (visitedBefore) {
        setSplash(false);
        setLoading(false);
        return;
      }

      try {
        await preloadImages(); 
        const timer = setTimeout(() => {
          setSplash(false);
          Cookies.set('visitedBefore', 'true', { expires: 30 });
        }, 3500);
        return () => clearTimeout(timer);
      } catch (err) {
        setSplash(false);
      } finally {
        setLoading(false);
      }
    };
    handleSplash();
  }, []);

  return { loading, splash };
};
