import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    submitQuestion(params) {
      console.log(params);
      var indexRoute = this;
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save().then(function() {
        indexRoute.refresh();
      });
    }
  }
});
