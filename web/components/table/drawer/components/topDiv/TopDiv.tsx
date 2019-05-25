import * as React from 'react';
import styled from 'styled-components';
import { HistoryNode } from '../../DrawerContainer';
import { TiTimes, TiArrowBack } from 'react-icons/ti';

interface Props {
  history: HistoryNode[];
  onClose: () => void;
  goBack: () => void;
}

export const TopDiv: React.FunctionComponent<Props> = ({
  history,
  onClose,
  goBack,
}) => {
  const renderIcon = () => {
    if (history.length === 1) {
      return <TiTimes onClick={onClose} />;
    } else if (!history.length) {
      return null;
    } else {
      return <TiArrowBack onClick={goBack} />;
    }
  };

  const renderBreadcrumbs = () =>
    history.length > 1 &&
    history.map(({ type, id }) => `${type} #${id}`).join(' > ');

  return (
    <Styles>
      <div className="breadcrumbs">{renderBreadcrumbs()}</div>
      {renderIcon()}
    </Styles>
  );
};

const Styles = styled.div`
  svg {
    cursor: pointer;
    position: fixed;
    top: 1em;
    left: 1em;
    width: 2em;
    height: 2em;
    z-index: 9999;
  }

  .breadcrumbs {
    margin-bottom: 1em;
  }
`;
