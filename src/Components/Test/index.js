import { Button, Radio, Space } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { Context } from '../../AppContext';
import data from '../../data';
import AnswerTile from './AnswerTile';
import './test.css';

const questions = data.questions;
const testTime = 120000;

function TestPage() {
  const [question, setQuestion] = useState(0);
  const [time, setTime] = useState('1:59');

  const { answers, setAnswers, name, email } = useContext(Context);

  const navigate = useNavigate();

  // console.log(time);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((time) => {
        let val = parseInt(time.substring(2));
        if (val == 0) {
          val = 59;
          const str =
            (parseInt(time.substring(0, 1)) - 1).toString() +
            ':' +
            val.toString();
          return str;
        } else {
          // console.log(val);
          val--;
          // console.log(val);
          const str = time.substring(0, 2) + val.toString();
          // console.log(str);
          return str;
        }
      });
    }, 1000);

    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      navigate('/finish');
    }, testTime);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <div className="test-left">
        <div className="test-left-header">
          <span style={{ fontWeight: '600' }}>Frontend development test</span>
          <span>
            <p style={{ margin: '0', fontSize: '15px', fontWeight: '600' }}>
              {name ? name : 'Guest'}
            </p>
            <p style={{ margin: '0', fontSize: '13px' }}>
              {email ? email : 'guest@gmail.com'}
            </p>
          </span>
          <span>🕜 {time}</span>
        </div>

        <div className="test-left-content">
          <h3>
            {question + 1}. {questions[question]?.description}
          </h3>
          <Radio.Group value={answers[question]}>
            <Space direction="vertical">
              {questions[question]?.options.map((item, index) => {
                // console.log(answers[question] == index);
                return (
                  <Radio
                    key={index}
                    value={index.toString()}
                    onChange={(e) => {
                      // console.log(e.target.checked);
                      const updateAnswer = [...answers];
                      updateAnswer[question] = index.toString();
                      setAnswers([...updateAnswer]);
                    }}
                  >
                    {item}
                  </Radio>
                );
              })}
            </Space>
          </Radio.Group>
        </div>
        <Button
          type="primary"
          style={{
            width: '150px',
            height: '50px',
            position: 'absolute',
            bottom: '40px',
            right: '40px'
          }}
          onClick={() => {
            if (question == 9) navigate('/finish');
            setQuestion(question + 1);
          }}
        >
          {question == 9 ? 'Finish' : 'Next'}
        </Button>
      </div>
      <div className="test-right">
        <div className="test-right-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            Answered
            <AnswerTile type={1} setQuestion={() => {}} index={-1} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            Not Answered
            <AnswerTile type={0} setQuestion={() => {}} index={-1} />
          </div>
        </div>
        <div className="test-right-content">
          {answers.map((item, index) => {
            if (item == '')
              return (
                <AnswerTile
                  setQuestion={setQuestion}
                  index={index}
                  type={0}
                  key={'a' + index}
                />
              );
            else
              return (
                <AnswerTile
                  setQuestion={setQuestion}
                  index={index}
                  type={1}
                  key={'a' + index}
                />
              );
          })}
          <Button
            type="primary"
            style={{
              width: '150px',
              height: '50px',
              position: 'absolute',
              bottom: '40px',
              right: '40px'
            }}
            onClick={() => {
              let val = window.confirm('Are you sure you want to end test?');
              if (val) navigate('/finish');
            }}
          >
            Submit Test
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TestPage;
