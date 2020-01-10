import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';


export function addComment(text) {
  return {
    type: ADD_COMMENT,
    id: uuid.v4(),
    text: text,
  }
};

// funkcja tworząca i wysyłająca akcję za pomoca metody dispatch
// const boundAddComment = text => dispatch(addComment(text));

export function editComment(id, text) {
  console.log('editComment executed');
  return {
    type: EDIT_COMMENT,
    text,
    id,
  }
};

// const boundEditComment = (text, id) => dispatch(editComment(text, id));

export function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id,
  }
};

// const boundRemoveComment = id => dispatch(removeComment(id));

export function thumbUpComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    id,
  }
};

// const boundThumbUpComment = (id, thumbsUp) => dispatch(thumbUpComment(id, thumbsUp));

export function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id,
  }
};

// const boundThumbDownComment = (id, thumbsDown) => dispatch(thumbDownComment(id, thumbsDown));
