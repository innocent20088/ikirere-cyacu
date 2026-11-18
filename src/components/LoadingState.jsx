
function LoadingState({ message = "Loading climate information..." }) {
  return (
    <div className="loading-state" role="status">
      <div className="loading-spinner" />
      <p>{message}</p>
    </div>
  );
}

export default LoadingState;
