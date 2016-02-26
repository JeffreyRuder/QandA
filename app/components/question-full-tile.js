import Ember from 'ember';

export default Ember.Component.extend({
  answerFormShowing: false,
  
  actions: {
    showAnswerForm() {
      this.set('answerFormShowing', true);
    },

    submitAnswer() {
      var params = {
        answer_author: this.get('answer_author'),
        answer_text: this.get('answer_text'),
        question: this.get('question'),
        timestamp: Date.now()
      };
      this.set('answerFormShowing', false);
      this.set('answer_author', undefined);
      this.set('answer_text', undefined);
      this.sendAction('submitAnswer', params);
    }
  }
});
