const Results = ({score,onRestart}) => {
  return (
    <div className="results">
      <p>퀴즈종료</p>
      <p>최종점수 : {score}점</p>
      <button onClick={onRestart}>다시 시작하기</button>
    </div>
  );
};

export default Results;