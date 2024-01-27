export type Post = {
    author: string;
    title: string;
    date: string;
    description: string;
    image: string;
    link: string;
    readTime: number;
}

export const welcomePost = {
    author: "Zachary Marion",
    title: "Welcome",
    date: "08-15-2018",
    description:
      "Welcome to my blog! I've been meaning to create one for a while, and finally got around to actually doing it! In case you were wondering, it was made using Ghost, a wonderful open source blogging platform. I hosted it on a DigitalOcean droplet, created a subdomain, and voila! A blog for $5 a month.",
    image:
      "https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ&s=19cb3f8faa546e028839b6985ee2491d",
    link: "/posts/welcome",
    readTime: 2,
}

export const minimaxPost = {
    author: "Zachary Marion",
    title: "Minimax",
    date: "08-19-2018",
    description:
      "I've been playing a lot of chess recently, and it has gotten me interested in how the game should optimally be played. In college I took an intro to AI course, and one of the first things that we covered was an algorithm called minimax",
    image:
      "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ&s=a95f188182bee368ba7465de4dc3d8c4",
    link: "/posts/minimax",
    readTime: 12,
  };

export const minimaxContinuedPost = {
    author: "Zachary Marion",
    title: "Minimax Continued",
    date: "09-12-2018",
    description:
      "So in between my last post and this one, I realized that I wanted to create some tree animations to show some common tree operations and explain more gracefully how the minimax algorithm worked.",
    image:
      "https://images.unsplash.com/photo-1465487862947-ded619a2a9ab?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ&s=68130b7d4392394e1876bbd54c82f427",
    link: "/posts/minimax-continued",
    readTime: 12,
};

const unorderedPosts: Post[] = [
    welcomePost, 
    minimaxPost,
    minimaxContinuedPost 
]

// @ts-expect-error
export const posts = unorderedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));