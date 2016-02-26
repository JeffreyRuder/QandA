import Ember from 'ember';

export default Ember.Component.extend({
  fullNotesShowing: false,

  actions: {
    showFullNotes() {
      this.set('fullNotesShowing', true);
    },
  }
});
