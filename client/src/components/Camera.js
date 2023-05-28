import Webcam from "react-webcam";
import { useRef } from "react";

function Camera() {
    const webRef = useRef(null);
    const videoConstraints = {
        facingMode: {exact:"enviroment"}
    };
    let img = null;
    const showImage = () => {
        img = webRef.current.getScreenshot();
        console.log(webRef.current.getScreenshot());
    };
    return (
        <div className="Camera">
            React Webcam
            <Webcam ref={webRef} screenshotQuality={0.8} screenshotFormat="image/jpeg" videoConstraints={videoConstraints}/>
            <button onClick={showImage}>Show Image</button>
            <br />
            <img src={img} />
        </div>
    )
}

export default Camera;