import { OrbitProgress } from 'react-loading-indicators';

export const PreLoading = () => {
  return (
    <div className="loading-app">
      <OrbitProgress color="#056fec" size="medium" text="" textColor="" />
    </div>
  );
};
