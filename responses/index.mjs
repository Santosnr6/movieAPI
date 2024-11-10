export const sendResponse = (statusCode, body) => {
  return {
    statusCode: statusCode,
    body: JSON.stringify({
      data : body
    }),
  };
}