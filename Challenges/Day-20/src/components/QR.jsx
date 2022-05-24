import React, { useState } from 'react';
import QRCode from "react-qr-code";

import './qr.css';

const QR = () => {
    const [qr, setQr] = useState('');
    const handleChange = (event) => {
        setQr(event.target.value);
    };
    return (
        <div>
            <h1>QR Generator</h1>


            <div style={{ marginTop: 30 }}>
                <form>
                    <input onChange={handleChange} value={qr} type="text" name="name" variant="outlined" placeholder="Nombre del QR" />
                </form>
            </div>

            <div>
                {
                    <QRCode
                        id="myqr"
                        value={qr}
                        size={320}
                        bgColor="#fff"
                    />
                }
            </div>
        </div>
    );
};

export default QR;

