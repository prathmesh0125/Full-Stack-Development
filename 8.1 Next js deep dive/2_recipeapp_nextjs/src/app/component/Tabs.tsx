// components/Tabs.js
'use client'
import { useState } from 'react';

const tabs = ['Home', 'Service', 'About', 'Review'];

const content = {
  Home: ['Service', 'About', 'Review'],
  Service: ['Home', 'About', 'Review'],
  About: ['Home', 'Service', 'Review'],
  Review: ['Home', 'Service', 'About']
};

const Tabs = () => {
  //@ts-ignore
  const [activeTab, setActiveTab] = useState<any>('Home');

  return (
    <div>
      <div className="tabs">
        {tabs.map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)}>
            {tab}
          </button>
        ))}
      </div>
      <div className="content">
        <h1>{activeTab}</h1>
        {content[activeTab].map((item):any => (
          <div key={item}>
            <h2>{item}</h2>
            <p>Content for {item} section...</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .tabs {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .content > div {
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Tabs;
