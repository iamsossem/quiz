import "./CategorySelection.css";
const CategorySelection = ({categories,onCategorySelect}) => {  
  return (
    <div className="category-selection">
      <h1>금융 퀴즈 풀고<br/>햇님포인트 받기</h1>
      <h3>카테고리를 선택하세요.!</h3>
      <div className="category-btn">
      {
        categories.map( (txt,idx)=>{
          return <button 
                  key={idx}
                  onClick={()=>{onCategorySelect(txt)}}
                 >{txt}</button>
        })
      }
      </div>
    </div>
  );
};
export default CategorySelection;