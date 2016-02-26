import Ember from 'ember';

export default Ember.Component.extend({
  answerFormShowing: false,
  editFormShowing: false,

  actions: {
    showAnswerForm() {
      this.set('answerFormShowing', true);
    },

    hideAnswerForm() {
      this.set('answerFormShowing', false);
    },

    showEditForm() {
      this.set('editFormShowing', true);
    },

    hideEditForm() {
      this.set('editFormShowing', false);
    },

    submitEdit(question) {
      var params = {
        question_text: this.get('edit_question_text'),
        notes: this.get('edit_notes')
      };
      this.set('editFormShowing', false);
      this.set('edit_notes', undefined);
      this.set('edit_question_text', undefined);
      this.sendAction('submitEdit', question, params);
    },

    submitAnswer() {
      var params = {
        answer_author: this.get('answer_author'),
        answer_text: this.get('answer_text'),
        question: this.get('question'),
        timestamp: Date.now(),
        upvotes: 0
      };
      this.set('answerFormShowing', false);
      this.set('answer_author', undefined);
      this.set('answer_text', undefined);
      this.sendAction('submitAnswer', params);
    },

    upvote(answer) {
      this.sendAction('upvote', answer);
    }
  }
});
