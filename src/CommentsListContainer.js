// funkcja connect służy do łączenia komponentów do store
import {connect} from 'react-redux';
import CommentsList from './CommentsList';

// mapStateToProps mapuje porcje stanu do propsów i przekazuje je komponentowi, na wejściu przyjmuje stan aplikacji a zwraca obiekt podpinający konkretne wartości rpopsów do komponentu (tutaj do CommentsList)
const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(mapStateToProps)(CommentsList);