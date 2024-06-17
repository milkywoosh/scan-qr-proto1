import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const QrScanner = () => {
  const [data, setData] = useState('NO RESULT');

  return (
    <>
      <button onClick={()=> setData('NO RESULT')}> RESET </button>
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
          if (!!error) {
            setData(error.message)
            return 
          }
        }}
        style={{width: "80%"}}
      />
      <p>Hasil:  {data}</p>
    </>
  );
}
    
export default QrScanner