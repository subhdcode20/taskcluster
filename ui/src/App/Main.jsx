import React, { Fragment } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { object, arrayOf } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import RouteWithProps from '../components/RouteWithProps';
import ErrorPanel from '../components/ErrorPanel';
import { route } from '../utils/prop-types';

const useStyles = makeStyles(theme => ({
  '@global': {
    [[
      'input:-webkit-autofill',
      'input:-webkit-autofill:hover',
      'input:-webkit-autofill:focus',
      'input:-webkit-autofill:active',
    ].join(',')]: {
      transition:
        'background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s',
      transitionDelay: 'background-color 5000s, color 5000s',
    },
    '.mdi-icon': {
      fill: theme.palette.text.primary,
    },
    '.CodeMirror': {
      fontSize: 13,
      height: '100% !important',
    },
    '[disabled] .mdi-icon': {
      fill: theme.palette.primary.light,
    },
    a: {
      color: theme.palette.text.primary,
    },
    'html, body': {
      color: theme.palette.text.secondary,
    },
    pre: {
      overflowX: 'auto',
    },
    ':not(pre) > code': {
      ...theme.mixins.highlight,
    },
  },
}), { withTheme: true }
);
const MainHooks = ({ error, routes }) => (
  <Fragment>
    <ErrorPanel error={error} />
    <BrowserRouter>
      <Switch>
        {routes.map(({ routes, ...props }) => (
          <RouteWithProps key={props.path || 'not-found'} {...props} />
        ))}
      </Switch>
    </BrowserRouter>
  </Fragment>
);

MainHooks.propTypes = {
  error: object,
  routes: arrayOf(route).isRequired,
};

MainHooks.defaultProps = {
  error: null,
};

export default MainHooks;
