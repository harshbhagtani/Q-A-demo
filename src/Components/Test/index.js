import { Button, Radio, Space } from 'antd';
import React, { useState } from 'react';
import data from '../../data';
import './test.css';

const questions = data.questions;

function TestPage() {
  const [answers, setAnswers] = useState(['', '', '', '', '']);
  const [question, setQuestion] = useState(0);

  return (
    <div>
      <div className="test-left">
        <div className="test-left-header">
          <span>Frontend development test</span>
          <span>🕜 29 minutes</span>
        </div>

        <div className="test-left-content">
          <h3>{questions[question]?.description}</h3>
          <Radio.Group>
            <Space direction="vertical">
              {questions[question]?.options.map((item, index) => {
                return <Radio value={index}>{item}</Radio>;
              })}
            </Space>
          </Radio.Group>
        </div>
        <Button type="primary" style={{ width: '100px' }}>
          Next
        </Button>
      </div>
      <div className="test-right">
        <div className="test-right-header"></div>
        <div className="test-right-content"></div>
      </div>
    </div>
  );
}

export default TestPage;
