import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { Navigate, useParams } from "react-router-dom";
import "react-quill/dist/quill.snow.css";

export default function EditPost() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState("");

  useEffect(() => {
    fetch("http://localhost:4040/post/" + id).then((response) => {
      response.json().then((postInfo) => {
        setTitle(postInfo.title);
        setSummary(postInfo.summary);
        setContent(postInfo.content);
      });
    });
  }, []);

  async function UpdatePost(e) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("id", id);
    if (files?.[0]) {
      data.set("file", files[0]);
    }

    e.preventDefault();
    console.log(files);

    const response = await fetch("http://localhost:4040/post", {
      method: "PUT",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={'/post/' +id} />
  }

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  return (
    <div>
      <form onSubmit={UpdatePost}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <input type="file" onChange={(e) => setFiles(e.target.files)} />
        <ReactQuill
          value={content}
          modules={modules}
          formats={formats}
          onChange={(newValue) => setContent(newValue)}
        />
        <button className="post">Update Post</button>
      </form>
    </div>
  );
}
