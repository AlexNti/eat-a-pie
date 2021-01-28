exports.onCreateNode = ({
  node, getNode, actions, page,
}) => {
  const { createPage } = actions;

  if (page && page.path && page.path.match(/^\/app/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = '/app/*';
    // Update the page.
    createPage(page);
  }
};
