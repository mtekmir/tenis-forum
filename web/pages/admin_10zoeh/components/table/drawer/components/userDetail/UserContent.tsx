import * as React from 'react';
import { Args } from '../../DrawerContainer';
import { Profile } from './components/Profile';
import { Threads } from './components/Threads';
import { Posts } from './components/Posts';
import { Tabs } from '../../../../../../../components/tabs/Tabs';
import { Tab } from '../../../../../../../components/tabs/Tab';

interface Props {
  data: any;
  getDetail: (args: Args) => void;
}

export const UserContent: React.FunctionComponent<Props> = ({
  data,
  getDetail,
}) => {
  const [currentTab, setCurrentTab] = React.useState(0);
  const tabs = ['Profile', 'Threads', 'Posts'];
  const tabContent = [
    <Profile data={data} />,
    <Threads userId={data.id} getDetail={getDetail} />,
    <Posts userId={data.id} getDetail={getDetail} />,
  ];

  return (
    <>
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
      {tabContent[currentTab]}
    </>
  );
};
