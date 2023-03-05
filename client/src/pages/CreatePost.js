import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreatePost() {

  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');

 async function createNewPost(e) {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);

    e.preventDefault();
    console.log(files)

    const response = await fetch('http://localhost:4040/post', {
        method: 'POST',
        body: data
    })
    console.log(await response.json());
  };

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
      <form onSubmit={createNewPost} >
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Summary" value={summary} onChange={(e) => setSummary(e.target.value)} />
        <input type="file" onChange={(e) => setFiles(e.target.files)} />
        <ReactQuill value={content} modules={modules} formats={formats} onChange={newValue => setContent(newValue)} />
        <button className="post">Create Post</button>
      </form>
    </div>
  );
}
