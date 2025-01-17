import React from 'react';
import './App.css';

function ResultComponent({ data }) {

  return (
    <div className="result">
      <div className='outer'><h2 className='res'>total</h2> <h2 className='res'>{data.total}</h2> </div>
      
      { data.pound!=0 && (<div className='outer'><h2 className='res'>Pound X&nbsp;&nbsp;{data.pound}</h2> <h2 className='res'>{data.pound * 24.5}</h2></div>)}
      { data.half!=0 && (<div className='outer'><h2 className='res'>half X&nbsp;&nbsp;{data.half}</h2> <h2 className='res'>{data.half * 24.5}</h2></div>)}
      { data.quater!=0 && (<div className='outer'><h2 className='res'>Quater X&nbsp;&nbsp;{data.quater}</h2> <h2 className='res'>{data.quater * 26.5}</h2></div>)}
      { data.forasi!=0 && (<div className='outer'><h2 className='res'>Forasi X&nbsp;&nbsp;{data.forasi}</h2> <h2 className='res'>{ (data.forasi * 24.6).toFixed(1)}</h2></div>)}
      { data.twist!=0 && (<div className='outer'><h2 className='res'>Twist X&nbsp;&nbsp;{data.twist}</h2> <h2 className='res'>{data.twist * 82}</h2></div>)}
      { data.cd!=0 && (<div className='outer'><h2 className='res'>C.D. X&nbsp;&nbsp;{data.cd}</h2> <h2 className='res'>{data.cd * 82}</h2></div>)}
      { data.khoraki!=0 && (<div className='outer'><h2 className='res'>Khoraki X&nbsp;&nbsp;{data.khoraki}</h2> <h2 className='res'>{data.khoraki * 40}</h2></div>)}
      <hr></hr>
      <h2 className='res'>{(data.total + data.pound * 24.5 + data.half * 24.5 + data.quater * 26.5 + data.forasi * 24.6 + data.twist * 82 + data.cd * 82 + data.khoraki * 40).toFixed(1)}</h2>
      <div className='outer'><h2 className='res'>Jer</h2> <h2 className='res'>{data.jer}</h2></div>
      <hr></hr>
      <h2 className='res'>{(data.total + data.pound * 24.5 + data.half * 24.5 + data.quater * 26.5 + data.forasi * 24.6 + data.twist * 82 + data.cd * 82 + data.khoraki * 40 + data.jer).toFixed(1)}</h2>
    </div>
  );
}

export default ResultComponent;
