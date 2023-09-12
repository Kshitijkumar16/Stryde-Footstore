const button = ({ label, iconURL, shadow }) => {
  return (
    <button className="custom-button">
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="Right Arrow Icon"
          className="w-5 h-5 rounded-full ml-2 hover:bg-coral-red "
        />
      )}
    </button>
  );
};

export default button;
