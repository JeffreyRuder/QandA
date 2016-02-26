import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    submitQuestion(params) {
      var self = this;
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save().then(function() {
        self.transitionTo('index');
      });
    },

    submitAnswer(params) {
      var self = this;
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      newAnswer.save().then(function() {
        return question.save().then(function() {
          self.transitionTo('question', question);
        });
      });
    },

    submitEdit(question, params) {
      var self = this;
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          question.set(key, params[key]);
        }
      });
      question.save().then(function() {
        self.transitionTo('question', question);
      });
    },

    upvote(answer) {
      var self= this;
      answer.incrementProperty('upvotes');
      answer.save();
    }
  }
});
