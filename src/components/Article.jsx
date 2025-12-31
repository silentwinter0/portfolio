import React from 'react'
import './Article.css'

export default function Article({ imageSrc = '', title = '', subtitle = '', content = '', link = '#' }) {
  return (
    <article className="article">
      <div className="article-projecttext">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{content}</p>
        
        {/*<div className="article-readmore">
          <a href={link}>Read more</a>
        </div>*/}
      </div>
    </article>
  )
}
