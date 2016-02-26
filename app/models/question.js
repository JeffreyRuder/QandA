import DS from 'ember-data';

export default DS.Model.extend({
  question_author: DS.attr(),
  question_text: DS.attr(),
  timestamp: DS.attr(),
  notes: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
