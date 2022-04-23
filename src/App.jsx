import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";
import Header from "./components/Header";
import { Wrapper, OptionWrapper, QrWrapper } from "./styled";

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
        margin: 2,
    },
});

const App = () => {
    const [url, setUrl] = useState("https://twitter.com/_menneck");
    const [fileExt, setFileExt] = useState("png");
    const ref = useRef(null);
    const [width, setWidth] = useState(300);
    const [height, setHeight] = useState(300);
    const [qrImg, setQrImg] = useState(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gull_portrait_ca_usa.jpg/300px-Gull_portrait_ca_usa.jpg"
    );
    const [dots, setDots] = useState("square");
    const [color, setColor] = useState("#ff0000");

    useEffect(() => {
        qrCode.append(ref.current);
    }, []);

    useEffect(() => {
        qrCode.update({
            data: url,
            width: width,
            height: height,
            image: qrImg,
            dotsOptions: {
                color: color,
                type: dots,
            },
        });
    }, [url, width, height, qrImg, dots, color]);

    const onUrlChange = (e) => {
        e.preventDefault();
        setUrl(e.target.value);
    };

    const onWidthChange = (e) => {
        e.preventDefault();
        setWidth(e.target.value);
    };

    const onHeightChange = (e) => {
        e.preventDefault();
        setHeight(e.target.value);
    };

    const onQrImgChange = (e) => {
        setQrImg(URL.createObjectURL(e.target.files[0]));
        console.log(e.target.files[0]);
        console.log(qrImg);
    };

    const onDotsTypeChange = (e) => {
        setDots(e.target.value);
    };

    const onColorChange = (e) => {
        setColor(e.target.value);
    };

    const onExtensionChange = (e) => {
        setFileExt(e.target.value);
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
                    <div className="qr-form">
                        <label className="mainOption">Main Options</label>
                        <OptionWrapper>
                            <label>Data</label>
                            <input value={url} onChange={onUrlChange} />
                        </OptionWrapper>
                        <OptionWrapper>
                            <label>Image</label>
                            <input
                                type="file"
                                name="arquivos"
                                accept="image/png, image/jpeg"
                                multiple
                                className="input-img"
                                onChange={onQrImgChange}
                            />
                        </OptionWrapper>
                        <OptionWrapper>
                            <label>Width</label>
                            <input
                                type="number"
                                value={width}
                                min="200"
                                max="350"
                                onChange={onWidthChange}
                            />
                        </OptionWrapper>
                        <OptionWrapper>
                            <label>Height</label>
                            <input
                                type="number"
                                value={height}
                                min="200"
                                max="350"
                                onChange={onHeightChange}
                            />
                        </OptionWrapper>
                        <label className="option">Dots Options</label>
                        <OptionWrapper>
                            <label>Dots Style</label>
                            <select
                                className="format-img"
                                onChange={onDotsTypeChange}
                                value={dots}
                            >
                                <option value="square">Square</option>
                                <option value="rounded">Rounded</option>
                                <option value="dots">Dots</option>
                                <option value="classy">Classy</option>
                                <option value="classy-rounded">
                                    Classy-Rounded
                                </option>
                                <option value="extra-rounded">
                                    Extra-Rounded
                                </option>
                            </select>
                        </OptionWrapper>
                        <OptionWrapper>
                            <label>Dots Color</label>
                            <input
                                type="color"
                                value={color}
                                onChange={onColorChange}
                            />
                        </OptionWrapper>
                        
                    </div>
                    <QrWrapper>
                        <div ref={ref} className="qrcode" />
                        <div className="download-main">
                            <button
                                className="download-button"
                                onClick={onDownloadClick}
                            >
                                Download
                            </button>
                            <select
                                className="format-img"
                                onChange={onExtensionChange}
                                value={fileExt}
                            >
                                <option value="png">PNG</option>
                                <option value="jpeg">JPEG</option>
                                <option value="webp">WEBP</option>
                            </select>
                        </div>
                    </QrWrapper>
                </div>
            </Wrapper>
        </>
    );
};

export default App;
