

export const getAccountSession = account => {
  return {
    type: 'GET_ACCOUNT_SESSION',
    payload: account,
  }
}

