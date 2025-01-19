function breadResultComponent({data}){
    return (
        <>
        <div className="result">
          <div className='outer'><h3 className='res'>total</h3> <h2 className='res'>{data.total}</h2> </div>
          <div className="outer"><h3 className='res'>Plain</h3><h2 className='res'>{((data.pound+data.half+data.quater)/4).toFixed(0)}</h2></div>
          <hr></hr>
          <h2 className='res'>{(data.total + data.pound * 24.5 + data.half * 24.5 + data.quater * 26.5 + data.forasi * 24.6 + data.twist * 82 + data.cd * 82 + data.khoraki * 40).toFixed(1)}</h2>
          <div className='outer'><h3 className='res'>Jer</h3> <h2 className='res'>{data.jer}</h2></div>
          <hr></hr>
          <h2 className='res'>{(data.total + data.pound * 24.5 + data.half * 24.5 + data.quater * 26.5 + data.forasi * 24.6 + data.twist * 82 + data.cd * 82 + data.khoraki * 40 + data.jer).toFixed(1)}</h2>
        </div>

        <div className="result">
            <div className='outer'><h3 className='res'>total</h3> <h2 className='res'>{data.total}</h2> </div>

                { data.pound!=0 && (<div className='outer'><h3 className='res'>পাউন্ড X&nbsp;&nbsp;{data.pound}</h3> <h2 className='res'>{data.pound * 24.5}</h2></div>)}
                { data.half!=0 && (<div className='outer'><h3 className='res'>হাফ X&nbsp;&nbsp;{data.half}</h3> <h2 className='res'>{data.half * 24.5}</h2></div>)}
                { data.quater!=0 && (<div className='outer'><h3 className='res'>কোয়াটার X&nbsp;&nbsp;{data.quater}</h3> <h2 className='res'>{data.quater * 26.5}</h2></div>)}
                { data.forasi!=0 && (<div className='outer'><h3 className='res'>ফরাসী X&nbsp;&nbsp;{data.forasi}</h3> <h2 className='res'>{ (data.forasi * 24.6).toFixed(1)}</h2></div>)}
                { data.twist!=0 && (<div className='outer'><h3 className='res'>টুইস্ট X&nbsp;&nbsp;{data.twist}</h3> <h2 className='res'>{data.twist * 82}</h2></div>)}
                { data.cd!=0 && (<div className='outer'><h3 className='res'>C.D. X&nbsp;&nbsp;{data.cd}</h3> <h2 className='res'>{data.cd * 82}</h2></div>)}
                { data.khoraki!=0 && (<div className='outer'><h3 className='res'>খোরাকী X&nbsp;&nbsp;{data.khoraki}</h3> <h2 className='res'>{data.khoraki * 40}</h2></div>)}
                <hr></hr>
                <h2 className='res'>{(data.total + data.pound * 24.5 + data.half * 24.5 + data.quater * 26.5 + data.forasi * 24.6 + data.twist * 82 + data.cd * 82 + data.khoraki * 40).toFixed(1)}</h2>
                <div className='outer'><h3 className='res'>Jer</h3> <h2 className='res'>{data.jer}</h2></div>
                <hr></hr>
                <h2 className='res'>{(data.total + data.pound * 24.5 + data.half * 24.5 + data.quater * 26.5 + data.forasi * 24.6 + data.twist * 82 + data.cd * 82 + data.khoraki * 40 + data.jer).toFixed(1)}</h2>
        </div>
        </>
      );
}

export default breadResultComponent;