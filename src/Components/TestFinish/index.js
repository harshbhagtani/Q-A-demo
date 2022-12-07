import { Button, Spin } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../AppContext';
import data from '../../data';

const correctAnswer = data;
function TestFinish() {
  const [calculate, setCalculate] = useState(true);
  const navigate = useNavigate();

  const [correct, setCorrect] = useState(0);
  const [attempted, setAttempted] = useState(10);
  const { answers, setAnswers } = useContext(Context);

  useEffect(() => {
    setTimeout(() => {
      setCalculate(false);
    }, 3000);
    let cnt = 0;
    let attemptedd = 10;
    correctAnswer.questions.forEach((item, index) => {
      if (answers[index] == '') attemptedd--;
      else if (item.answer == answers[index]) {
        cnt++;
      }
    });
    setAttempted(attemptedd);
    setCorrect(cnt);
    setAnswers(['', '', '', '', '', '', '', '', '', '']);
  }, []);
  if (calculate) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: '100vh',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Spin></Spin>
          <p>Calculating your score...</p>
        </div>
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ marginTop: '80px' }}>
        {' '}
        <h1>Congratulations on completing the test 🎉</h1>
        <h3>You have succefully submitted the assignment ✅</h3>
        <p>Questions asked - 10</p>
        <p>Questions attempted - {attempted}</p>
        <p>Your score - {(correct / 10) * 100}</p>
        <Button onClick={() => navigate('/')}>
          Go Back to Give a new test
        </Button>
      </div>
    </div>
  );
}

export default TestFinish;
