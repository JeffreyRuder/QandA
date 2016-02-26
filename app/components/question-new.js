import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    submitQuestion() {
      var params = {
        question_author: this.get('question_author'),
        question_text: this.get('question_text'),
        timestamp: Date.now(),
        notes: null
      }
      console.log(params);
      this.sendAction('submitQuestion', params);
    }
  }
});
