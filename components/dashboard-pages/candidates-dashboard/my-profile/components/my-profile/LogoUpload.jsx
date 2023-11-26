import { useState } from "react";

const LogoUpload = () => {
    const [logImg, setLogoImg] = useState("");
    const logImgHander = (e) => {
        setLogoImg(e.target.files[0]);
    };
    return (
        <>
            <div className="uploading-outer">
                <div className="uploadButton">
                    <input
                        className="uploadButton-input"
                        type="file"
                        name="attachments[]"
                        accept="image/*"
                        id="upload"
                        required
                        onChange={logImgHander}
                    />
                    <label
                        className="uploadButton-button ripple-effect"
                        htmlFor="upload"
                    >
                        {logImg !== "" ? logImg.name : "Logoya Gözat"}
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

export default LogoUpload;
