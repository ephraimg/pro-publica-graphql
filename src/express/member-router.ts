import * as express from 'express';
import { callProPub } from '../utilities/http';
import { senateMembersUri, houseMembersUri } from '../utilities/uris';
import { currentSession } from '../utilities/constants';

const memberRouter = express.Router();

memberRouter.get('/senate-members', async (req, res) => {
  const { session = currentSession } = req.query;
  const results = await callProPub({
    url: senateMembersUri(session)
  });
  res.send(results);
});

memberRouter.get('/house-members', async (req, res) => {
  const { session = currentSession } = req.query;
  const results = await callProPub({
    url: houseMembersUri(session)
  });
  res.send(results);
});

export { memberRouter };
