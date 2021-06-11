import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useRef } from 'react';

import { gravatarPath } from '../gravatar';

const useStyles = makeStyles(() => ({
  message: {
    textAlign: 'right',
  },
  avatar: {
    display: 'none',
  },
  primary: {
    fontSize: '2px',
  },
}));

export const MessageItem = ({ isLastItem, name, text, nickname }) => {
  const ref = useRef(null);
  const classes = useStyles();
  const avatarPath = gravatarPath(name);

  useEffect(() => {
    if (isLastItem) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isLastItem]);

  return (
    <ListItem ref={ref} className={name === nickname ? classes.message : null}>
      <ListItemAvatar>
        <Avatar
          src={avatarPath}
          className={name === nickname ? classes.avatar : null}
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography component="p" variant="body2" color="textSecondary">
            {name}
          </Typography>
        }
        secondary={
          <Typography component="span" variant="body1" color="textPrimary">
            {text}
          </Typography>
        }
      />
    </ListItem>
  );
};
