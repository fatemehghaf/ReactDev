
const PageBtn = ({ currentPage, handleNextPage, handlePrevPage }) => {

    const Previous = <>&#171;</>
    const Next = <>&#187;</>
  return (
    <div style={{ textAlign: "center", marginTop: 20 }}>
      <button style={{backgroundColor:"cyan",padding:10}} onClick={handlePrevPage}>{Previous}</button>
      <span style={{ margin: "0 10px" }}>Page {currentPage}</span>
      <button style={{backgroundColor:"cyan",padding:10}} onClick={handleNextPage}>{Next}</button>
    </div>
  );
};

export default PageBtn;
