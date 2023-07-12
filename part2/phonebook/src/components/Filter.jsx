const Filter = ({ newFilterName, handleChange }) => {
  return (
    <div>
      filter shown with<input value={newFilterName} onChange={handleChange} />
    </div>
  );
}

export default Filter;

