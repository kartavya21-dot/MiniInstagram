import React, { useState } from "react";
import "./NewPost.css";
import { newPosts } from "../../services/postServices";

const NewPost = () => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const [caption, setCaption] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const fileUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(fileUrl);
    }
  };
  const removeMedia = () => {
    setFile(null);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("caption", caption);
    formData.append("user", 3);
    try{
      const response = await newPosts(formData);
      console.log(response);
    } catch(e){
      console.log(e);
    }
  }
  
  return (
    <div className="new-post-page">
      <form>
        <textarea
          type="text"
          placeholder="Enter caption for post..."
          name="caption"
          id="caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        {!file && <label htmlFor="media">Choose Media...</label>}
        {!file && (
          <input
            type="file"
            name="media"
            id="media"
            onChange={handleFileChange}
          />
        )}
        {file && (
          <div className="media-things">
            <div className="media-preview">
              <img src={previewUrl} alt="" />
            </div>
            <button type="button" onClick={removeMedia} className="remove-media">Remove Media</button>
          </div>
        )}
        <button type="submit" onClick={handleSubmit} className="new-post-submit">
          Post
        </button>
      </form>
    </div>
  );
};

export default NewPost;
