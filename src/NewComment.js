import React from 'react';
import { connect } from 'react-redux';
import { addComment } from './actions';

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
      <form onSubmit = {(e) => this.handleSubmit(e)}>
        <textarea
          value = { this.state.text }
          onChange = {(e) => this.handleChange(e)}
          rows = '5'
          cols = '60'
        />
        <button type='submit'>Add Comment</button>
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCommentInput);