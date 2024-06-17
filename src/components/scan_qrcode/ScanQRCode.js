import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const QrScanner = () => {
  const [data, setData] = useState('No result');

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
      <QrReader
        constraints={{
          facingMode: {exact:"user"},
        }}
        key="environment"
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }
        }}
        style={{width: "100%"}}
      />
      <p>{data}</p>
    </>
  );
}
    
export default QrScanner