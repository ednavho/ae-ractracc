import React, {useRef, useEffect, useState} from "react";

function Feed(){
    const videoRef = useRef(null);
    const photoRef = useRef(null);

    const [hasPhoto, setHasPhoto] = useState(false); 

    const getVideo = () => {
        navigator.mediaDevices.
            getUserMedia({
                video : {width : 1920, height : 1080}
            })
            .then(stream => {
                let video = videoRef.current;
                video.srcObject = stream;
                video.play();
            })
            .catch(err => {
                console.error(err);
            })
    }

    const takePhoto = () => {
        const width = 414;
        const height = width / (16 / 9);
    }
    useEffect( () => {
        getVideo();
    }, [videoRef]);

    return (
        <div className="feed">
            <div className="camera">
                <video ref={videoRef}></video>
                <button>SNAP</button>
            </div>
            <div className={'result' + (hasPhoto ? 'hasPhoto' : '')}>
                <canvas ref={photoRef}></canvas>
                <button>CLOSE</button>
            </div>
        </div>
    )
}

export default Feed;