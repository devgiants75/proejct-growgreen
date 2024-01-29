import React from 'react';
import MyPageSubTab from '../myPageSubTab';

// 활동 내역 (작성된 댓글/ 작성된 게시물)
function Activity() {
  return (
    <>
      {/* 작성된 댓글 */}
      <MyPageSubTab to="/commentsWritten" label="작성된 댓글" />
      {/* 작성된 게시물 */}
      <MyPageSubTab to="/postWritten" label="작성된 게시물" />
    </>
  );
}

export default Activity;
