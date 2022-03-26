import * as React from 'react';

interface BlogCardProps {
  title: string;
  image: { 
    src: string;
    alt: string;
  };
  intro: string;
  postDate: string;
  link: string;
};

const BlogCard = ({ title, intro, image, postDate }:BlogCardProps) => {
  return (
    <article>
      {image && <img src={image.src} alt={image.alt} />}
      {title && <h3>{title}</h3>}
      {intro && intro}
      {postDate && <time>{postDate}</time>}
      {link && <a href={link}>Read post</a>}
    </article>
  )
};

export default BlogCard;