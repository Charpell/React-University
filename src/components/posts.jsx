import React from "react";
import queryString from 'query-string';

// http://localhost:3000/posts/2019/05?sortBy=newest&approved=true

const Posts = ({ match, location }) => {
  const result = queryString.parse(location.search)
  console.log(result)
  
  return (
    <div>
      <h1>Posts</h1>
      Year: {match.params.year}, Month: {match.params.month}
    </div>
  );
};

export default Posts;
