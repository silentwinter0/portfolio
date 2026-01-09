import React from 'react'
import './Article.css'

export default function Article({ imageSrc = '',
  title = '',
  subtitle = '',
  content = '',
  link = '#',
  textAlign = 'left' 
}) {
  return (
    <article className="article">
      <div className="article-projecttext" style={{textAlign: textAlign}}>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <div className='article-paragraph'>{content}</div>
        
        {/*<div className="article-readmore">
          <a href={link}>Read more</a>
        </div>*/}
      </div>
    </article>
  )
}
