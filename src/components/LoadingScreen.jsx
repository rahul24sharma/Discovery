import BellaIcon from './BellaIcon'

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center space-y-4">
        <BellaIcon size={64} className="text-rose-500 mx-auto animate-pulse" />
        <p className="text-stone-500 text-sm font-light">
          Preparing your journey...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;