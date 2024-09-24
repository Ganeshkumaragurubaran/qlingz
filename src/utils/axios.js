import axios from 'axios';
import https from 'https';

import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: CONFIG.site.serverUrl,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong!')
);

export default axiosInstance;
// ----------------------------------------------------------------------
// Separate Axios Instance for Laravel authentication endpoints
const backendAxiosInstance = axios.create({
  baseURL: CONFIG.site.laravelServerUrl,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

backendAxiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject((error.response && error.response.data) || 'Something went wrong with Auth API!')
);

export { backendAxiosInstance };

// ----------------------------------------------------------------------

export const fetcher = async (args) => {
  try {
    const [url, config] = Array.isArray(args) ? args : [args];

    const res = await axiosInstance.get(url, { ...config });

    return res.data;
  } catch (error) {
    console.error('Failed to fetch:', error);
    throw error;
  }
};

// ----------------------------------------------------------------------

export const backendFetcher = async (args) => {
  try {
    const [url, config] = Array.isArray(args) ? args : [args];

    const res = await backendAxiosInstance.get(url, { ...config });

    return res.data;
  } catch (error) {
    console.error('Failed to fetch from Auth API:', error);
    throw error;
  }
};

// ----------------------------------------------------------------------

export const endpoints = {
  chat: '/api/chat',
  kanban: '/api/kanban',
  task: '/api/task-kanban',
  tickets: '/api/ticket-kanban',
  calendar: '/api/calendar',
  auth: {
    me: 'api/user',
    signIn: '/api/auth/login',
    signInWithAD: '/auth/login/graph',
    signUp: '/api/auth/sign-up',
    signOut: '/api/auth/logout',
    updateUser: '/api/update-user',
  },
  mail: {
    list: '/api/mail/list',
    details: '/api/mail/details',
    labels: '/api/mail/labels',
  },
  permission: {
    list: '/api/permissions',
  },
  role: {
    list: '/api/roles',
    get: '/api/role',
  },
  user: {
    list: '/api/get/users/list',
    byId: '/api/get/user',
  },
  post: {
    list: '/api/post/list',
    details: '/api/post/details',
    latest: '/api/post/latest',
    search: '/api/post/search',
  },
  product: {
    list: '/api/product/list',
    details: '/api/product/details',
    search: '/api/product/search',
  },
  phonenumber: {
    list: '/api/phonenumber/list',
  },
  address: {
    list: '/api/address/list',
  },
  category: {
    list: '/api/category/list',
  },
  addons: {
    list: '/api/addons/list',
  },
  products: {
    list: '/api/products/list',
  },
  contact: {
    list: '/api/contact/list',
  },
  company: {
    general: '/api/company/general',
    list: '/api/company/open-api',
    id: '/api/company/:id',
    deals: '/api/company/deals',
    contacts: '/api/company/contacts',
    details: '/api/company/details',
  },
  partner: {
    list: '/api/partner/open-api',
    details: '/api/partner/details',
  },
  workflow: {
    list: '/api/workflows',
    add: '/api/workflows',
  },
  ticket: {
    list: '/api/ticket/list',
    details: '/api/ticket/details',
  },
  service: {
    create: '/api/service/create',
  },
  contacts: {
    list: '/api/contacts/open-api',
    id: '/api/contacts/:id',
    details: '/api/contacts/details',
  },
  deals: {
    details: '/api/deals/details',
    list: '/api/deals/open-api',
  },
  quotes: {
    details: '/api/quotes/details',
    list: '/api/quotes/open-api',
  },
  // for Customer 360
  customer360: {
    contact: {
      list: '/api/customer360/contacts',
    },
    account: {
      list: '/api/customer360/accounts',
    },
    customer: {
      list: '/api/customer360/customers',
      details: '/api/customer360/details',
      id: '/api/customer360/customer/:id',
    },
  },
};
