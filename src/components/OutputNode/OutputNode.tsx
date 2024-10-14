const OutputNode = (data:any) => {
    return (
      <div className="p-4 border rounded bg-white">
        <h4>Output Node</h4>
        <p>{data.response || 'No output yet'}</p>
      </div>
    );
  };
  
  export default OutputNode;
  