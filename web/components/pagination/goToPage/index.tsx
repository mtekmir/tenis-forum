import * as React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import {
  PageButton,
  GoToPageContainer,
  GoToPageBottomDiv,
  GoToPageInput,
  Popover,
} from './goToPageStyle';
import { TiPlus, TiMinus } from 'react-icons/ti';
import { Button } from '../../Button';

interface Props {
  pageCount: number;
  pagePrefix: number;
  onPageChange: (page: number) => void;
}

interface State {
  open: boolean;
  pageInput: number;
}

export class GoToPage extends React.PureComponent<Props, State> {
  public readonly state: State = {
    open: false,
    pageInput: 1,
  };

  openModal = () => {
    const { pagePrefix } = this.props;
    this.setState({
      open: true,
      pageInput: pagePrefix,
    });
  }

  closeModal = () => {
    this.setState({
      open: false,
    });
  }

  changePage = (change: number) => {
    const { pageInput } = this.state;
    if (pageInput === 1 && change === -1) {
      return;
    }

    if (pageInput + change > this.props.pageCount) {
      return;
    }
    this.setState(state => ({
      pageInput: state.pageInput + change,
    }));
  }

  handleGo = () => {
    this.closeModal();
    this.props.onPageChange(this.state.pageInput);
  }

  render() {
    const { open, pageInput } = this.state;
    return (
      <OutsideClickHandler onOutsideClick={this.closeModal}>
        <Popover>
          <PageButton
            onClick={() => (open ? this.closeModal() : this.openModal())}
          >
            <span>...</span>
          </PageButton>
          <GoToPageContainer open={open}>
            <div>
              <span>Sayfaya Git</span>
              <hr />
            </div>
            <GoToPageBottomDiv>
              <GoToPageInput
                value={pageInput}
                onChange={e =>
                  this.setState({ pageInput: parseInt(e.target.value, 10) })
                }
              />

              <TiPlus onClick={() => this.changePage(1)} />
              <TiMinus onClick={() => this.changePage(-1)} />
              <Button
                text="Git"
                color="green_gradient"
                wide
                onClick={() => this.handleGo()}
              />
            </GoToPageBottomDiv>
          </GoToPageContainer>
        </Popover>
      </OutsideClickHandler>
    );
  }
}
