import { useState } from "react";

const PageNum = ({ currentPage, setCurrentPage }) => {

    const [value,setValue]= useState(1);

  return (
    <div style={{ textAlign:"Left", margin: 20 }}>
      {[1, 2, 3, 4,5].map(page => (
        <button 
        key={page}
         onClick={() => 
            {setCurrentPage(page);
             setValue(page)}}
         style={{ backgroundColor:value === page
            || setCurrentPage ===page ? "cyan" : "pink",
            margin: "0 5px",
            cursor:"pointer",padding:"10",
            width:40,height:40,
            borderRadius:6 }}
         >
          {page}
        </button>
      ))}
    </div>
  );
};

export default PageNum;