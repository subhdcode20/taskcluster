import React, { useState } from 'react';
import { node, string } from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import PageTitle from '../PageTitle';
import Helmet from '../Helmet';
import ErrorPanel from '../ErrorPanel';

const useStyles = makeStyles(theme => {
  console.log('theme in Landing ', theme);
  return ({
    root: {
      flexGrow: 1,
      minHeight: '100vh',
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      width: '100%',
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background,
      paddingBottom: theme.spacing.unit * 12,
      overflowY: 'auto',
      minHeight: '100vh',
    },
})});
/**
 * Render the layout for plain/non-application-based views.
 */

const Landing = ({ className, children, title, ...props }) => {
  const [error, setError] = useState(null);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Helmet />
      <PageTitle>{title}</PageTitle>
      <main className={classNames(classes.content, className)} {...props}>
        {error ? <ErrorPanel fixed error={error} /> : children}
      </main>
    </div>
  );
}

Landing.propTypes = {
  children: node.isRequired,
  title: string,
};

Landing.defaultProps = {
  title: '',
};

export default Landing;
