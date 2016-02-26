import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  answer_text: DS.attr(),
  question: DS.belongsTo('question', {async: true}),
  timestamp: DS.attr()
});
