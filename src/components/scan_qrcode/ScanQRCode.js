// import { useState } from 'react';
// import { QrReader } from 'react-qr-reader';

const QrScanner = () => {
  // const [data, setData] = useState('NO RESULT');

  return (
    <div>
      <h1>Currently Not Active</h1>
      {/* MATIIN DULU */}
      {/* <button onClick={()=> setData('NO RESULT')}> RESET </button>
      <QrReader
        constraints={{
          facingMode: {exact:"environment"},
        }}
        key="environment"
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
            return
          }  
      
        }}
        style={{width: "100%"}}
      />
      <p>Hasil: {data}</p> */}
    </div>
  );
}
    
export default QrScanner