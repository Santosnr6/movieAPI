import middy from '@middy/core';
import { validateKey } from '../../middlewares/validateKey.mjs';
import { errorHandler } from '../../middlewares/errorHandler.mjs';
import { sendResponse } from '../../responses/index.mjs';
import { movies } from '../../data/movies.mjs';
import { validateJwt } from '../../middlewares/validateJwt.mjs';

export const handler = middy(async (event) => {
  return sendResponse(200, movies);
}).use(validateJwt())
  .use(errorHandler());
