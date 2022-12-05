import { Component } from 'react';

import cn from 'classnames';

import OutsideClickHandler from '../OutsideClickHandler/OutsideClickHandler';

import styles from './Select.module.scss';

class Select extends Component {
  state = {
    isOptionsOpen: false,
    selectedOption: 0,
  };

  // componentDidUpdate() {
  //   this.writeQuerySelectedCurrency(this.state.selectedOption);
  // }

  toggleOptions = () => {
    this.setState({ isOptionsOpen: !this.state.isOptionsOpen });
  };

  // writeQuerySelectedCurrency = index => {
  //   if (!this.props.data.loading) {
  //     client.writeQuery({
  //       query: SELECTED_CURRENCY,
  //       data: {
  //         selectedCurrency: {
  //           __typename: 'SelectedCurrency',
  //           symbol: this.props.data.currencies[index].symbol,
  //           label: this.props.data.currencies[index].label,
  //         },
  //       },
  //     });
  //   }
  // };

  setSelectedThenCloseDropdown = index => {
    this.setState(
      {
        selectedOption: index,
        isOptionsOpen: false,
      }
      // () => this.writeQuerySelectedCurrency(index)
    );
  };

  handleKeyDown = index => e => {
    switch (e.key) {
      case ' ':
      case 'SpaceBar':
      case 'Enter':
        e.preventDefault();
        this.setSelectedThenCloseDropdown(index);
        break;
      default:
        break;
    }
  };

  handleListKeyDown = e => {
    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        this.setState({ isOptionsOpen: false });
        break;
      case 'ArrowUp':
        e.preventDefault();
        this.setState({
          selectedOption:
            this.state.selectedOption - 1 >= 0
              ? this.state.selectedOption - 1
              : this.props.data.currencies.length - 1,
        });
        break;
      case 'ArrowDown':
        e.preventDefault();
        this.setState({
          selectedOption:
            this.state.selectedOption === this.props.data.currencies.length - 1
              ? 0
              : this.state.selectedOption + 1,
        });
        break;
      default:
        break;
    }
  };

  render() {
    // const {
    //   data: { currencies, loading },
    // } = this.props;
    console.log('this.props.arrData:', this.props.arrData);
    const arrData = this.props.arrData;
    return (
      <div className={styles.wrapper}>
        {/* {!loading && ( */}
        <div className={styles.container}>
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded={this.state.isOptionsOpen}
            className={cn(
              styles.textBtn,
              this.state.isOptionsOpen ? styles.expanded : ''
            )}
            onClick={this.toggleOptions}
            onKeyDown={this.handleListKeyDown}
          >
            {arrData[this.state.selectedOption]}
          </button>
          <OutsideClickHandler
            onOutsideClick={() => {
              this.setState({ isOptionsOpen: false });
            }}
          >
            <ul
              className={cn({
                [styles.show]: this.state.isOptionsOpen,
                [styles.options]: true,
              })}
              role="listbox"
              aria-activedescendant={arrData[this.state.selectedOption]}
              tabIndex={-1}
              onKeyDown={this.handleListKeyDown}
            >
              {arrData.map((month, index) => (
                <li
                  className={styles.item}
                  key={arrData[index]}
                  id={arrData[index]}
                  role={arrData[index]}
                  aria-selected={this.state.selectedOption === index}
                  tabIndex={0}
                  onKeyDown={this.handleKeyDown(index)}
                  onClick={() => {
                    this.setSelectedThenCloseDropdown(index);
                  }}
                >
                  {arrData[index]}
                </li>
              ))}
            </ul>
          </OutsideClickHandler>
        </div>
        {/* )} */}
      </div>
    );
  }
}

export default Select;
// export default graphql(GET_KIND_OF_CURRENCIES)(withRouter(Select));
