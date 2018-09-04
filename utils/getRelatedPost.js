export default (posts, title) => {
  if (posts.length === 0) return null;
  const sortedPosts = posts;
  sortedPosts.sort((a, b) => new Date(a.date) - new Date(b.date))[0];
  const postIndex = sortedPosts.findIndex(p => p && p.title === title);
  // If there is a post after this one
  if (sortedPosts.length > postIndex + 1) {
    return sortedPosts[postIndex + 1];
  }
  // otherwise return a random post
  return sortedPosts.filter(p => p && p.title !== title)[
    Math.floor(Math.random() * (sortedPosts.length - 1))
  ];
};
