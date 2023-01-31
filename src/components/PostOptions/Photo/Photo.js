import { useState } from "react"


export default function Photo(props){
    const [selectedImage, setSelectedImage] = useState(null);

    return (
      <div>
        <h1>Upload Image</h1>
        {selectedImage && (
          <div>
          <img alt="not found" width={"400px"} src={URL.createObjectURL(selectedImage)} />
          <br />
          <button onClick={()=>setSelectedImage(null)}>Remove</button>
          </div>
        )}
        <br />
        <br /> 
        <input
          type="file"
          name="myImage"
          onChange={(event) => {
            setSelectedImage(event.target.files[0]);
          }}
        />
      </div>
    )
};


