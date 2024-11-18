export const Header = ({ setShowModal, setModalMode }) => {
  const handleAdd = () => {
    setModalMode('add');
    setShowModal(true);
  };
  return (
    <div className="header">
      <h1>
        음식블로그<button onClick={() => handleAdd()}>추가</button>
      </h1>
    </div>
  );
};
