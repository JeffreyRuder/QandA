import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('question', {reload: true}).then(function(questions) {
      return questions.sortBy('timestamp').reverse();
    });
  },

  actions: {
    submitQuestion(params) {
      var self = this;
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save().then(function() {
        self.refresh();
      });
    }
  }
});
