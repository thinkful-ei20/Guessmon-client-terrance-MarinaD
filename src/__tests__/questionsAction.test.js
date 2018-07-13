import { requestAnswer, REQUEST_ANSWER, answerSuccess, ANSWER_SUCCESS, answerError, ANSWER_ERROR, resetResult, RESET_RESULT, questionSuccess, QUESTION_SUCCESS } from "../actions/questions";

describe('Request answer', () => {
  it('should return the action', () => {
    const action = requestAnswer();
    expect(action.type).toEqual(REQUEST_ANSWER);
  });
});

describe('Answer Success', () => {
  it('should return the action', () => {
    const result = 'test result';
    const action = answerSuccess(result);
    expect(action.type).toEqual(ANSWER_SUCCESS);
    expect(action.result).toEqual(result);
  });
});

describe('Answer Error', () => {
  it('should return the action', () => {
    const error = 'test error';
    const action = answerError(error);
    expect(action.type).toEqual(ANSWER_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe('Reset Result', () => {
  it('should return the action', () => {
    const action = resetResult();
    expect(action.type).toEqual(RESET_RESULT);
  });
});

describe('Question Success', () => {
  it('should return the action', () => {
    const question = 'test queston';
    const action = questionSuccess(question);
    expect(action.type).toEqual(QUESTION_SUCCESS);
    expect(action.question).toEqual(question);
  });
});