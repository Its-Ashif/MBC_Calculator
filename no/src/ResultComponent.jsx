import React from 'react';
import './App.css';

function ResultComponent({ data }) {
  return (
    <div className="result">
      <h2 className='res'>total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.total}</h2>
      { data.p!=0 && (<h2 className='res'>Pound X&nbsp;&nbsp;{data.p}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.p * 24.5}</h2>)}
      { data.h!=0 && (<h2 className='res'>half X&nbsp;&nbsp;{data.h}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.h * 24.5}</h2>)}
      { data.q!=0 && (<h2 className='res'>Quater X&nbsp;&nbsp;{data.q}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.q * 26.5}</h2>)}
      { data.f!=0 && (<h2 className='res'>Forasi X&nbsp;&nbsp;{data.f}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.f * 24.6}</h2>)}
      { data.t!=0 && (<h2 className='res'>Twist X&nbsp;&nbsp;{data.t}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.t * 82}</h2>)}
      { data.cd!=0 && (<h2 className='res'>C.D. X&nbsp;&nbsp;{data.cd}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.cd * 82}</h2>)}
      <h2>--------------------------------------------</h2>g
      <h2 className='res'>{data.total + data.p * 24.5 + data.h * 24.5 + data.q * 26.5 + data.f * 24.6 + data.t * 82 + data.cd * 82}</h2>
      <h2 className='res'>Jer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.jer}</h2>
      <h2>--------------------------------------------</h2>
      <h2 className='res'>{data.total + data.p * 24.5 + data.h * 24.5 + data.q * 26.5 + data.f * 24.6 + data.t * 82 + data.cd * 82 + data.jer}</h2>

    </div>
  );
}

export default ResultComponent;
