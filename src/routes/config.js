import { lazy } from 'react';
import BasicLayout from '@/layouts/BasicLayout';
import BlankLayout from '@/layouts/BlankLayout';

const config = [
  {
    path: '/',
    component: BlankLayout,
    childRoutes: [
      {
        path: '/login',
        name: '登录页',
        component: lazy(() => import('@/page/login')),
      },
      {
        path: '/',
        component: BasicLayout,
        childRoutes: [
          {
            path: '/home',
            name: '首页',
            component: lazy(() => import('@/page/home')),
          },
          {
            path: '/customer',
            name: "客户",
            childRoutes: [
              {
                path: '/customer/customerAdd',
                name: "客户录入",
                component: lazy(() => import('@/page/customer/customerAdd'))
              },
              {
                path: '/customer/customerOrder',
                name: "客户记录",
                component: lazy(() => import('@/page/customer/customerOrder'))
              }
            ]
          },
          {
            path: '/exception/403',
            component: lazy(() => import('@/page/exception/403.js')),
          },
          {
            path: '/exception/404',
            exact: true,
            component: lazy(() => import('@/page/exception/404')),
          },
          {
            path: '/exception/500',
            component: lazy(() => import('@/page/exception/500')),
          },
          { path: '/', exact: true, redirect: '/home' },
          { path: '*', exact: true, redirect: '/exception/404' },
        ],
      },
    ],
  },
];

export default config;
