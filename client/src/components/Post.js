import { format } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({
  title,
  summary,
  content,
  image,
  createdAt,
  author,
  _id
}) {
  return (
    <div className="post">
      <div className="image">
        <Link to={`post/${_id}`}>
          <img src={"http://localhost:4040/" + image} />
        </Link>
      </div>
      <div className="title">
        <Link to={`post/${_id}`}>
        <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">{author.username}</a>
          <time>{format(new Date(createdAt), "MMM dd, yyyy  hh:mm a")}</time>
        </p>
        <p className="summary">{summary}</p>
        {/* <p>{_id}</p> */}
      </div>
    </div>
  );
}
