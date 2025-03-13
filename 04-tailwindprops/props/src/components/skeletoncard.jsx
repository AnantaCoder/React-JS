const SkeletonCard = () => {
    return (
      <div className="max-w-2xl p-6 rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse text-center">
        <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-3"></div>
        <div className="h-4 w-1/2 bg-gray-300 rounded mx-auto mb-2"></div>
        <div className="h-4 w-3/4 bg-gray-300 rounded mx-auto mb-2"></div>
        <div className="h-4 w-2/3 bg-gray-300 rounded mx-auto mb-2"></div>
        <div className="h-4 w-1/2 bg-gray-300 rounded mx-auto"></div>
      </div>
    );
  };
  
  export default SkeletonCard;
  