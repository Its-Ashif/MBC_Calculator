import React from 'react';
import './App.css';

function ResultComponent({ data }) {

  return (
    <div className="result">
      <div className='outer'><h2 className='res'>total</h2> <h2 className='res'>{data.total}</h2> </div>
      
      { data.p!=0 && (<div className='outer'><h2 className='res'>Pound X&nbsp;&nbsp;{data.p}</h2> <h2 className='res'>{data.p * 24.5}</h2></div>)}
      { data.h!=0 && (<div className='outer'><h2 className='res'>half X&nbsp;&nbsp;{data.h}</h2> <h2 className='res'>{data.h * 24.5}</h2></div>)}
      { data.q!=0 && (<div className='outer'><h2 className='res'>Quater X&nbsp;&nbsp;{data.q}</h2> <h2 className='res'>{data.q * 26.5}</h2></div>)}
      { data.f!=0 && (<div className='outer'><h2 className='res'>Forasi X&nbsp;&nbsp;{data.f}</h2> <h2 className='res'>{ (data.f * 24.6).toFixed(1)}</h2></div>)}
      { data.t!=0 && (<div className='outer'><h2 className='res'>Twist X&nbsp;&nbsp;{data.t}</h2> <h2 className='res'>{data.t * 82}</h2></div>)}
      { data.cd!=0 && (<div className='outer'><h2 className='res'>C.D. X&nbsp;&nbsp;{data.cd}</h2> <h2 className='res'>{data.cd * 82}</h2></div>)}
      <h2>--------------------------------------------</h2>
      <h2 className='res'>{data.total + data.p * 24.5 + data.h * 24.5 + data.q * 26.5 + data.f * 24.6 + data.t * 82 + data.cd * 82}</h2>
      <div className='outer'><h2 className='res'>Jer</h2> <h2 className='res'>{data.jer}</h2></div>
      <h2>--------------------------------------------</h2>
      <h2 className='res'>{data.total + data.p * 24.5 + data.h * 24.5 + data.q * 26.5 + data.f * 24.6 + data.t * 82 + data.cd * 82 + data.jer}</h2>
    </div>
  );
}

export default ResultComponent;
