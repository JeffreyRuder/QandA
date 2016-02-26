import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    upvote(answer) {
      this.sendAction('upvote', answer);
    }
  }
});
