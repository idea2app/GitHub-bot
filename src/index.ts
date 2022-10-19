import { Probot, ApplicationFunctionOptions } from "probot";
import express from 'express';

export const myProbotApp = (app: Probot, { getRouter }: ApplicationFunctionOptions) => {
  if (getRouter) {
    // Get an express router to expose new HTTP endpoints
    const router = getRouter();
    // Use any middleware
    router.use(express.static('public'));

    // Add a new route
    router.get('/hello-world', (_: any, res: any) => {
      res.end('Hello World');
    });
  }

  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    await context.octokit.issues.createComment(issueComment);
  });

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
