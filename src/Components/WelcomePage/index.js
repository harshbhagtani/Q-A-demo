import React, { useContext, useState } from 'react';
import { Button, DatePicker, Input } from 'antd';
import './welcome.css';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../AppContext';

function WelcomePage() {
  const navigate = useNavigate();

  const { setDate, setEmail, setName, date, email, name } = useContext(Context);

  console.log(email, name);

  const instructions = [
    'Instruction 1',
    'Instruction 2',
    'Instruction 3',
    'Instruction 4'
  ];

  return (
    <div className="welcome">
      <div className="welcome-container">
        {' '}
        <h2> 👋 Hello welcome to Seekho.</h2>
        <h4>Frontend development test</h4>
        <form style={{ width: '400px' }} className="form-box">
          <p style={{ fontSize: '13px' }}>
            Please fill your personal details before proceeding
          </p>
          <div className="form-field">
            <label>Name</label>
            <Input
              placeholder="Enter your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label>Email</label>
            <Input
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label>Date of birth</label>
            <DatePicker
              style={{ width: '400px' }}
              value={date}
              onChange={(date) => setDate(date)}
              disabledDate={(date) => {}}
            />
          </div>

          <span style={{ fontSize: '13px', fontWeight: '600' }}>
            Test Instructions
          </span>
          <ul
            style={{
              fontSize: '12px',
              margin: 0,
              marginLeft: '-20px',
              color: 'gray'
            }}
          >
            {instructions.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>

          <Button
            type="primary"
            style={{ marginTop: '15px' }}
            onClick={() => {
              navigate('/test');
            }}
          >
            Start Test
          </Button>
        </form>
      </div>
    </div>
  );
}

export default WelcomePage;
