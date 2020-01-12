import { connect } from 'react-redux';
import Comment from './Comment';
import { thumbUpComment, thumbDownComment, removeComment, editComment } from './actions';

// funkcja mapująca wywołanie akcji do propsów, zwraca obiekt z funkcjami gotowymi do użycia w komponentach
const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbDownComment: (id) => dispatch(thumbDownComment(id)),
  removeComment: (id) => dispatch(removeComment(id)),
  editComment: (id, text) => dispatch(editComment(id, text)),
});

export default connect(null, mapDispatchToProps)(Comment);