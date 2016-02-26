import Ember from 'ember';

export function answerNumber(params) {
  var question = params[0];
  var length = question.get('answers').get('length');

  if (length === 1) {
    return Ember.String.htmlSafe('<h4>1 Answer</h4>');
  } else {
    return Ember.String.htmlSafe('<h4>' + length + ' Answers</h4>');
  }
}

export default Ember.Helper.helper(answerNumber);
