import authReducer from '../../reducers/auth'


test('Should set default state', () => {
  const state = authReducer(undefined, {})
  expect(state).toEqual({})
})


test('should set uid for login', () => {
  const uid = '123abc'
  const action = { type: 'LOGIN', uid }
  const state = authReducer({}, action)
  expect(state.uid).toEqual(action.uid)
})


test('should clear uid for logout', () => {
  const action = { type: 'LOGOUT' }
  const state = authReducer({ uid: '123abc' }, action)
  expect(state).toEqual({})
})