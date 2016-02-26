import DS from 'ember-data';

export default DS.Model.extend({
  question_author: DS.attr(),
  question_text: DS.attr(),
  timestamp: DS.attr(),
  neg_timestamp: DS.attr(),
  notes: DS.attr(),
  notes_preview: DS.attr(),
  notes_areLong: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
