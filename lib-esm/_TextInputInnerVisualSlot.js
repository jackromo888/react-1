import React from 'react';
import Box from './Box.js';
import Spinner from './Spinner.js';

const TextInputInnerVisualSlot = ({
  children,
  hasLoadingIndicator,
  showLoadingIndicator,
  visualPosition
}) => {
  if (!children && !hasLoadingIndicator || visualPosition === 'leading' && !children && !showLoadingIndicator) {
    return null;
  }

  if (!hasLoadingIndicator) {
    return /*#__PURE__*/React.createElement("span", {
      className: "TextInput-icon"
    }, children);
  }

  return /*#__PURE__*/React.createElement("span", {
    className: "TextInput-icon"
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    position: "relative"
  }, children && /*#__PURE__*/React.createElement(Box, {
    sx: {
      visibility: showLoadingIndicator ? 'hidden' : 'visible'
    }
  }, children), /*#__PURE__*/React.createElement(Spinner, {
    sx: children ? {
      position: 'absolute',
      top: 0,
      height: '100%',
      maxWidth: '100%',
      visibility: showLoadingIndicator ? 'visible' : 'hidden',
      ...(visualPosition === 'leading' ? {
        left: 0
      } : {
        right: 0
      })
    } : {
      visibility: showLoadingIndicator ? 'visible' : 'hidden'
    },
    size: children ? undefined : 'small'
  })));
};

TextInputInnerVisualSlot.displayName = "TextInputInnerVisualSlot";
var TextInputInnerVisualSlot$1 = TextInputInnerVisualSlot;

export { TextInputInnerVisualSlot$1 as default };
