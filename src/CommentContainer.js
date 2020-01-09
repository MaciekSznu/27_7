import { connect } from 'react-redux';
import Comment from './Comment';
import { thumbUpComment } from './actions';

// funkcja mapująca wywołanie akcji do propsów, zwraca obiekt z funkcjami gotowymi do użycia w komponentach
const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);