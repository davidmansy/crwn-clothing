import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
  <div
    style={{
      background: `url(${imageUrl})`
    }}
    className={`menu-item ${size}`}
  >
    <div className="content">
      <div className="title">{title}</div>
      <div className="subtitle">SHOP NOW</div>
    </div>
  </div>
);

export default MenuItem;
