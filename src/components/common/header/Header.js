import React from 'react';
import '../header/Header.scss';

export default function Header() {
  const navArray = [
    {
      linkUrl: '/',
      link: 'Home',
    },
    {
      linkUrl: 'all-experiances',
      link: 'All Experiences',
    },
    {
      linkUrl: 'share-an-experience',
      link: 'Share an Experience',
    },
    {
      linkUrl: 'become-an-ambassador',
      link: 'Become an Ambassador',
    },
    {
      linkUrl: 'curd-operation',
      link: 'Curd Operation',
    },

  ];
  return (
    <section className="header-wrapper d-flex align-items-center justify-content-between">
      <div className="header-wrapper__logo">
        <a href="#0">
          <img src="/images/logo.png" className="img-responsive logo-icon" />
        </a>
      </div>
      <div className="header-wrapper__navigation">
        <ul className='header-wrapper__navigation-list-wrapper'>
          {navArray.map((navObj, index) => {
            return (
              <li key={`nav-${index}`} className='header-wrapper__navigation-list'><a className="header-wrapper__navigation-list-link" href={navObj.linkUrl}>{navObj.link}</a></li>
            );
          })}
        </ul>
      </div>
      <div className="header-wrapper__cta-btns  d-flex align-items-center gap">
        <button className='btn secondary-btn'>Sign in</button>
        <button className='btn primary-btn'>View all experiences</button>
      </div>
    </section>
  );
}