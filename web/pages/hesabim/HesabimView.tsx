import React, { useState } from 'react';
import { ProfileView } from './components/profile/profileView';
import { Tabs } from '../../components/tabs/Tabs';
import { Tab } from '../../components/tabs/Tab';
import Layout from '../../components/Layout';
import { ThreadsContainer } from './components/threads/ThreadsContainer';
import { PostsContainer } from './components/posts/PostContainer';
import { Styles } from './components/hesabimStyle';

interface Props {
  onSubmit: (v: any, profileImage: File | null) => void;
}
export const HesabimView: React.FC<Props> = ({ onSubmit }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [tabs] = useState(['Profil', 'Başlıklar', 'Cevaplar']);

  const renderContent = () => {
    const tabs = [
      <ProfileView onSubmit={onSubmit} />,
      <ThreadsContainer />,
      <PostsContainer />,
    ];
    return tabs[currentTab];
  };

  return (
    <Layout title="Hesabım | Tenis Forum">
      <Styles>
        <Tabs>
          {tabs.map((t, idx) => (
            <Tab
              key={idx}
              selected={currentTab === idx}
              onClick={() => setCurrentTab(idx)}
            >
              {t}
            </Tab>
          ))}
        </Tabs>
        <div className="content">{renderContent()}</div>
      </Styles>
    </Layout>
  );
};
