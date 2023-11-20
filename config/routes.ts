export default [
  { name:'一',path: '/user', layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  { name:'二',path: '/welcome', icon: 'smile', component: './Welcome' },
  {
    name:'三',
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {name:'1', path: '/admin', redirect: '/admin/sub-page' },
      {name:'2', path: '/admin/sub-page', component: './Admin' },
    ],
  },
  { icon: 'table', path: '/list', component: './TableList' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
