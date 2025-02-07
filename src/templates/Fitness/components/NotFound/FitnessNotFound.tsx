const FitnessNotFound = () => {
  return (
    <div
      style={{
        color: "white",
        height: "700px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: "1.5rem",
        padding: "20px",
      }}
    >
      <p>
        Oops! Something went wrong while fetching the fitness data. Please try
        again later.
      </p>
    </div>
  );
};

export default FitnessNotFound;
