import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const OrderManage = React.lazy(() => import('./order/OrderManage'));
const OrderDetails = React.lazy(() => import('./order/OrderDetails'));
const BillingInfo = React.lazy(() => import('./order/BillingInfo'));
const OrderStatusTrack = React.lazy(() => import('./order/OrderStatusTrack'));

const Notifications = React.lazy(() => import('./Notifications'));
const SubscriptionOverview = React.lazy(() => import('./SubscriptionOverview'));
const shop=React.lazy(()=> import('./Shops'))
const SpeciesExtensionList=React.lazy(()=>import('./SpeciesExtensionList'));
const Profile=React.lazy(()=>import('./views/pages/profile/profile'));

const routes = [
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  
  { path: '/OrderManage', name: 'Order Manage Page', element: OrderManage },
  { path: '/OrderDetails', name: 'Order Details Page', element: OrderDetails },
  { path: '/BillingInfo', name: 'Billing Info Page', element: BillingInfo },
  { path: '/OrderStatusTrack', name: 'Order Status Tracking Page', element: OrderStatusTrack },
  { path: '/shops', name: 'Shop Info Page', element: shop },
  { path: '/Profile', name: 'Profile Page', element: Profile },
  { path: '/Notifications', name: 'Notifications Page', element: Notifications },
  { path: '/SubscriptionOverview', name: 'Subscrition Overview Page', element: SubscriptionOverview },
  { path: '/listing', name: 'Species and Extensions Listing', element: SpeciesExtensionList },

]


export default routes
