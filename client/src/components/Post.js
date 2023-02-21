export default function Post () {
    return (
        <div className="post">
          <div className="image">
            <img src="https://techcrunch.com/wp-content/uploads/2023/02/CMC_6266.jpg?w=850&h=492&crop=1" />
          </div>
          <div className="content">
            <h2>
              Toyota Research Institute SVP on the difficulty of building the
              perfect home robot
            </h2>
            <p className="info">
              <a className="author">Alli Al-ameen</a>
              <time>2023-01-06 16:45</time>
            </p>
            <p className="summary">
              Max Bajracharya discusses the division’s trials and tribulations
              and why sometimes progress involves repeating your predecessor’s
              mistakes.
            </p>
          </div>
        </div>
    );
};