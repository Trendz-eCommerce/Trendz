import React, { useState } from 'react';
import Question from './Question.jsx';
import AddQuestionModal from './AddQuestionModal.jsx';
import AddAnswerModal from './AddAnswerModal.jsx';

const QuestionsAnswers = ({productId, questionData, productInfo }) => {
  const [questionModalOpen, setQuestionModalOpen] = useState(false);
  const [answerModalOpen, setAnswerModalOpen] = useState(false);
  const [questionCount, setQuestionCount] = useState(2);
  const [searchItem, setSearchItem] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [moreQuestions, setMoreQuestions] = useState(true);
  const questionModalHandler = (e) => {
    setQuestionModalOpen(true);
  };

  const answerModalHandler = (e) => {
    setCurrentQuestion(e);
    setAnswerModalOpen(true);
  };

  const sortQuestionsList = () => {
    questionData = questionData.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
  };

  if (questionData.length === 0) {
    return (
      <>
        <h2>There are no questions for this item</h2>
        <button className="qa-add-question-btn reviewButton" onClick={questionModalHandler}>Ask a question</button>
        <AddQuestionModal questionModalOpen={questionModalOpen}
          setQuestionModalOpen={setQuestionModalOpen}
          productId={productId}
          productName={productInfo.name} />
      </>
    );
  }


  const handleSearch = (e) => {
    setSearchItem(e.target.value);
  };

  return (
    <div className="qa-container" id="questions-answers">
      <h2>QUESTIONS & ANSWERS</h2>
      <div className="qa-question">
        <form>
          <label>Have a question? </label>
          <input
            className="qa-searchbar"
            placeholder={'Search for answers...'}
            value={searchItem}
            onChange={(handleSearch)}
          />
        </form>
        <AddQuestionModal questionModalOpen={questionModalOpen}
          setQuestionModalOpen={setQuestionModalOpen}
          productId={productId}
          productName={productInfo.name} />
        <AddAnswerModal answerModalOpen={answerModalOpen}
          setAnswerModalOpen={setAnswerModalOpen}
          questionData={currentQuestion}
          productName={productInfo.name} />

        { sortQuestionsList(),
        questionData
          .filter((item) => {
            if (searchItem.length < 3) {
              return true;
            } else {
              return item.question_body.toLowerCase().includes(searchItem.toLowerCase());
            }
          })
          .slice(0, questionCount).map((item) => {
            return <Question
              productId={productId}
              key={item.question_id}
              item={item}
              answerModalHandler={answerModalHandler}
              setAnswerModalOpen={setAnswerModalOpen}

            />;
          })}
        {(questionData.length > questionCount) && <button className="qa-more-questions-btn reviewButton" onClick={ () => {
          setQuestionCount(questionCount + 2);
        }}>See more answered questions</button>}
        <button className="qa-add-question-btn reviewButton" onClick={questionModalHandler}>Add a question</button>
      </div>
    </div>
  );
};

export default QuestionsAnswers;