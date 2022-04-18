import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";
import Header from "./components/Header";
import { Wrapper } from "./styled";
import { Button } from "./components/Button/styled";

const qrCode = new QRCodeStyling({
    width: 200,
    height: 200,
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    dotsOptions: {
        color: "#22b622",
        type: "rounded",
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin: 10,
    },
});

const App = () => {
    const [url, setUrl] = useState("https://qr-code-styling.com");
    const [fileExt, setFileExt] = useState("png");
    const ref = useRef(null);
    const [width, setWidth] = useState(200);
    const [height, setHeight] = useState(200);


    useEffect(() => {
        qrCode.append(ref.current);
    }, []);

    useEffect(() => {
        qrCode.update({
            data: url,
            width: width,
            height: height
        });
    }, [url, width, height]);

    const onUrlChange = (event) => {
        event.preventDefault();
        setUrl(event.target.value);
    };

    const onWidthChange = (e) => {
        e.preventDefault();
        setWidth(e.target.value)
    }

    const onHeightChange = (e) => {
        e.preventDefault();
        setHeight(e.target.value)
    }

    const onExtensionChange = (event) => {
        setFileExt(event.target.value);
    };

    const onDownloadClick = () => {
        qrCode.download({
            extension: fileExt,
        });
    };

    return (
        <>
            <Header />
            <Wrapper>
                <div className="qr-main">
                    <div>
                        <input value={url} onChange={onUrlChange} />
                        <input type="number" value={width} min="100" max="350" onChange={onWidthChange} />
                        <input type="number" value={height} min="100" max="350" onChange={onHeightChange} />
                    </div>
                    <div ref={ref} />
                    <select onChange={onExtensionChange} value={fileExt}>
                        <option value="png">PNG</option>
                        <option value="jpeg">JPEG</option>
                        <option value="webp">WEBP</option>
                    </select>
                    <Button onClick={onDownloadClick}>Download</Button>
                </div>
            </Wrapper>
        </>
    );
}

export default App