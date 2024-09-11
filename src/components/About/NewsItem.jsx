import React, { Component } from 'react';
import './NewsItem.css';

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, date, author, source } = this.props;
    return (
      <div className='news-item'>
        <div className="card">
          <img src={!imageUrl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzRe4A_Xr5dS6SshvHOlS5Lt89S_Mh55NKMXHlOaKN6rywHSxNu6_4DOXXeAj5R908pA&usqp=CAU" : imageUrl} className="card-img-top" alt="News" />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              <span className="badge bg-danger">{source}</span>
            </h5>
            <p className="card-text">{description}</p>
           
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read more</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
