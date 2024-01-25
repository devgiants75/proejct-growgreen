import React from 'react';
import { Link } from 'react-router-dom';

// 활동 내역 (작성된 댓글/ 작성된 게시물)
function Activity() {
  return (
    <div>
      <h2>*활동내역</h2>
      {/* 활동내역 */}
      <Link to="/commentsWritten">작성된 댓글</Link>
      <Link to="/postWritten">작성된 게시물</Link>
    </div>
  );
}

export default Activity;
