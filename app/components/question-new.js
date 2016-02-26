import Ember from 'ember';

export default Ember.Component.extend({
  detailsShowing: false,

  actions: {
    showDetails() {
      this.set('detailsShowing', true);
    },

    hideDetails() {
      this.set('detailsShowing', false);
    },

    submitQuestion() {
      var params = {
        question_author: this.get('question_author'),
        question_text: this.get('question_text'),
        notes: this.get('notes') || null,
        notes_preview: null,
        notes_areLong: false,
        timestamp: Date.now(),
      };

      if (this.get('notes')) {
        params.notes_preview = this.get('notes').substring(0, 100);
        params.notes_areLong = (this.get('notes').length > 100);
      };
      
      this.set('detailsShowing', false);
      this.set('question_author', undefined);
      this.set('question_text', undefined);
      this.set('notes', undefined);
      this.sendAction('submitQuestion', params);
    }
  }
});
