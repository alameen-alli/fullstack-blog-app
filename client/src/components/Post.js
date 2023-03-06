import { format } from "date-fns";

export default function Post ({title, summary, content, image, createdAt, author}) {
  
    return (
        <div className="post">
          <div className="image">
            <img src="https://techcrunch.com/wp-content/uploads/2023/02/CMC_6266.jpg?w=850&h=492&crop=1" />
          </div>
          <div className="title">
            <h2>
             {title}
            </h2>
            <p className="info">
              <a className="author">{author.username}</a>
              <time>{format(new Date(createdAt), 'MMM dd, yyyy  hh:mm a')}</time>
            </p>
            <p className="summary">
              {summary}
            </p>
          </div>
        </div>
    );
};