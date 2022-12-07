import React from 'react';

function AnswerTile({ setQuestion, index, type }) {
  return (
    <div
      onClick={() => setQuestion(index)}
      style={{
        width: '40px',
        height: '40px',
        background: !type ? 'red' : 'green',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px 30px',
        cursor: 'pointer',
        borderRadius: '5px'
      }}
    >
      {index == -1 ? '' : index + 1}
    </div>
  );
}

export default AnswerTile;
