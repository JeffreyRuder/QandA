import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    submitAnswer(params) {
      var self = this;
      var newAnswer = this.store.createRecord('answer', params);
      var thisQuestion = params.question;
      newAnswer.save().then(function() {
        return thisQuestion.save().then(function() {
          self.transitionTo('question', thisQuestion);
        });
      });
    }
  }
});
