import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const QrScanner = () => {
  const [data, setData] = useState('NO RESULT');

  function Scan(result, error) {
    if (!!result) {
      setData(result?.text);
    }

    if (!!error) {
      console.info(error);
    }
  }


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
          }
        }}
        style={{width: "90%"}}
      />
      <p>Hasil:  {data}</p>
    </>
  );
}
    
export default QrScanner