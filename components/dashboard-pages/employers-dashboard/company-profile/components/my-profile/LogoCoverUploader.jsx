import { useState } from "react";

const LogoCoverUploader = () => {
    const [logoImg, setLogoImg] = useState("");
    const [converImg, setCoverImg] = useState("");

    // logo image
    const logoHandler = (file) => {
        setLogoImg(file);
    };

    // cover image
    const coverHandler = (file) => {
        setCoverImg(file);
    };

    return (
        <>
            <div className="uploading-outer">
                <div className="uploadButton">
                    <input
                        className="uploadButton-input"
                        type="Dosya"
                        name="Ekler[]"
                        accept="Resim/*"
                        id="Yukle"
                        required
                        onChange={(e) => logoHandler(e.target.files[0])}
                    />
                    <label
                        className="uploadButton-button ripple-effect"
                        htmlFor="upload"
                    >
                        {logoImg !== "" ? logoImg?.name : " Logoya Gözat"}
                    </label>
                    <span className="uploadButton-file-name"></span>
                </div>
                <div className="text">
                    Maksimum dosya boyutu 1MB, Minimum boyut: 330x300 Ve
                    Uygun dosyalar .jpg & .png
                </div>
            </div>

            <div className="uploading-outer">
                <div className="uploadButton">
                    <input
                        className="uploadButton-input"
                        type="Dosya"
                        name="Ekler[]"
                        accept="image/*, application/pdf"
                        id="upload_cover"
                        onChange={(e) => coverHandler(e.target.files[0])}
                    />
                    <label
                        className="uploadButton-button ripple-effect"
                        htmlFor="upload_cover"
                    >
                        {converImg !== "" ? converImg?.name : "Kapağa Gözat"}
                    </label>
                    <span className="uploadButton-file-name"></span>
                </div>
                <div className="text">
                    Maksimum dosya boyutu 1MB, Minimum boyut: 330x300 Ve
                    Uygun dosyalar .jpg & .png
                </div>
            </div>
        </>
    );
};

export default LogoCoverUploader;
