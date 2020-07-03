import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classes from './styles.module.scss';
import { openDialog } from '../../../store/actions/dialogActions';

/**
 * Component renders a win98 styled Desktop Icon with attached Dialog
 *
 * @param {string} iconSrc
 * @param {string} iconName
 * @param {string} dialogIconSrc
 * @param {string} dialogName
 * @param {component} dialogContent
 * @param {function} openDialog
 */

const DesktopIcon = ({
  iconSrc,
  iconName,
  dialogIconSrc = iconSrc,
  dialogName = iconName,
  dialogContent,
  openDialog,
}) => {
  const handleClick = () => {
    if (dialogContent) {
      openDialog({
        icon: dialogIconSrc,
        dialogName: dialogName,
        children: dialogContent,
      });
    }
  };

  return (
    <button className={classes.desktopIcon} onClick={handleClick}>
      <img src={iconSrc} alt="" />
      <span>{iconName}</span>
    </button>
  );
};

DesktopIcon.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  dialogIconSrc: PropTypes.string,
};

const mapDispatchToProps = {
  openDialog,
};

export default connect(() => ({}), mapDispatchToProps)(DesktopIcon);
