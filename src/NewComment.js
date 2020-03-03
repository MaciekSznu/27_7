import React from 'react';
import { connect } from 'react-redux';
import { addComment } from './actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './NewComment.scss';

const mapDispatchToProps = dispatch => ({
  addComment: (text) => dispatch(addComment(text))
});

const mapStateToProps = state => ({
  comments: state.comments,
  form: state.form,
});

class NewCommentInput extends React.Component {
  state = {
    text: '',
    id: '',
  };

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addComment(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return(
      <div className="AddCommentWrapper">
        <form className="AddCommentForm" onSubmit = {(e) => this.handleSubmit(e)}>
          <textarea className="AddCommentTextArea"
            placeholder = 'New comment here!'
            value = { this.state.text }
            onChange = {(e) => this.handleChange(e)}
          />
          <button className="AddCommentButton" type='submit'><FontAwesomeIcon icon={faPlus} /></button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCommentInput);