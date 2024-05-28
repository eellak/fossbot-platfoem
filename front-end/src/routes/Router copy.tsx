import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const FullFillLayout = Loadable(lazy(() => import('../layouts/full/FullFillLayout')));
const BoxedLayout = Loadable(lazy(() => import('../layouts/full/BoxedLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const SamplePage = Loadable(lazy(() => import('../views/sample-page/SamplePage')));
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')));
const LandingPage = Loadable(lazy(() => import('../views/landing-page/LandingPage')));
const AccountsSettingsPage = Loadable(lazy(() => import('../views/account-settings-page/AccountsSettingsPage')));

import BlocklyPage from '../views/blockly-page/BlocklyPage';
import MonacoPage from '../views/monaco-page/MonacoPage';
import TutorialsPage from '../views/tutorials/TutorialsPage';
const HuaPage = Loadable(lazy(() => import('../views/sub-pages/HuaPage')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));
const Error = Loadable(lazy(() => import('../views/authentication/Error')));

// import AuthProvider from '../authentication/AuthProvider'; // Update with actual path
import PrivateRoute from './PrivateRoute'; // Update with actual path
import RoleBasedRoute from './RoleBasedRoute'; // Import the new component

const Router = [
  {
    path: '/sample-page',
    element: <BoxedLayout />,
    children: [{ path: '/sample-page', exact: true, element: <SamplePage /> }],
  },
  {
    path: '/dashboard',
    element: <PrivateRoute />,
    children: [
      {
        path: '',
        element: (
          // <RoleBasedRoute roles={['admin']}>
            <Dashboard />
          // </RoleBasedRoute>
        ),
      },
    ],
  },
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      { path: '/', element: <Navigate to="/landing-page" /> },
      { path: '/landing-page', exact: true, element: <LandingPage /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/hua-page',
    element: <BlankLayout />,
    children: [{ path: '/hua-page', exact: true, element: <HuaPage /> }],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '/auth/login', element: <Login /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/404', element: <Error /> },
    ],
  },
  {
    path: '/blockly-page',
    title: 'Blockly Editor',
    element: (
      <PrivateRoute>
        {/* <RoleBasedRoute betaTesterOnly> */}
          <FullLayout />
        {/* </RoleBasedRoute> */}
      </PrivateRoute>
    ),
    children: [
      { path: '/blockly-page', exact: true, element: <BlocklyPage /> },
      { path: '/blockly-page/:projectId', exact: true, element: <BlocklyPage /> },
    ],
  },
  {
    path: '/blockly-tutorial-page',
    title: 'Blockly Tutorial Editor',
    element: (
      <PrivateRoute>
        <RoleBasedRoute betaTesterOnly>
          <FullLayout />
        </RoleBasedRoute>
      </PrivateRoute>
    ),
    children: [
      { path: '/blockly-tutorial-page', exact: true, element: <BlocklyPage /> },
      { path: '/blockly-tutorial-page/', exact: true, element: <BlocklyPage /> },
    ],
  },
  {
    path: '/monaco-page',
    title: 'Monaco Editor',
    element: (
      <PrivateRoute>
        <RoleBasedRoute betaTesterOnly>
          <FullLayout />
        </RoleBasedRoute>
      </PrivateRoute>
    ),
    children: [
      { path: '/monaco-page/:projectId', exact: true, element: <MonacoPage /> },
      { path: '/monaco-page', exact: true, element: <MonacoPage /> },
    ],
  },
  {
    path: '/monaco-tutorial-page',
    title: 'Monaco Tutorial Editor',
    element: (
      <PrivateRoute>
        <RoleBasedRoute betaTesterOnly>
          <FullLayout />
        </RoleBasedRoute>
      </PrivateRoute>
    ),
    children: [
      { path: '/monaco-tutorial-page/', exact: true, element: <MonacoPage /> },
      { path: '/monaco-tutorial-page', exact: true, element: <MonacoPage /> },
    ],
  },
  {
    path: '/tutorials-page',
    element: <FullLayout />,
    children: [
      { path: '/tutorials-page', exact: true, element: <TutorialsPage /> },
      { path: '/tutorials-page', exact: true, element: <TutorialsPage /> },
    ],
  },
  {
    path: '/accountSettings',
    title: 'Account Settings',
    element: <PrivateRoute />,
    children: [
      {
        path: '',
        element: (
          <RoleBasedRoute>
            <AccountsSettingsPage />
          </RoleBasedRoute>
        ),
      },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [{ path: '404', element: <Error /> }],
  },
];

export default Router;