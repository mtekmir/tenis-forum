import * as React from 'react';
import styled from 'styled-components';
import { Args } from '../../DrawerContainer';
import { Profile } from './components/Profile';
import { Threads } from './components/Threads';
import { Posts } from './components/Posts';

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
      <TabsContainer>
        {tabs.map((t, idx) => (
          <Tab
            key={idx}
            selected={currentTab === idx}
            onClick={() => setCurrentTab(idx)}
          >
            {t}
          </Tab>
        ))}
      </TabsContainer>
      {tabContent[currentTab]}
    </>
  );
};

const TabsContainer = styled.div`
  /* position: absolute;
  bottom: 0;
  left: 0; */
  margin-top: -1em;
  margin-bottom: 1em;
  height: 2.5em;
  display: flex;
  padding-left: 1em;
  color: white;
  background: ${({ theme }) => theme.palette.primary};
`;

const Tab = styled.div<{ selected: boolean }>`
  padding: 0.6em;
  margin-right: 0.7em;
  cursor: pointer;

  ${({ selected }) =>
    selected &&
    `
    padding: .6em;
    padding-bottom: 1em;
    margin-right: .7em;
    border-bottom: 2px solid white;
    cursor: pointer;
  `}
`;
