import Ember from 'ember';
import InfinityRoute from 'ember-infinity/mixins/route';

export default Ember.Route.extend(InfinityRoute, {

  model() {
    return this.infinityModel('question', { perPage: 6, startingPage: 1, orderBy: 'neg_timestamp'});
  },

  actions: {
    submitQuestion(params) {
      var self = this;
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save().then(function() {
        self.refresh();
      });
    },
  }
});
