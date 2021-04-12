import { Home, Circle } from 'react-feather'

export default [
  {
    id: 'dashboards',
    title: 'Dashboards',
    icon: <Home size={20} />,
    badge: 'light-warning',
    navLink: '/dashboard/analytics'
    // children: [
    //   {
    //     id: 'analyticsDash',
    //     title: 'Analytics',
    //     icon: <Circle size={12} />,
        
    //   },
    //   // {
    //   //   id: 'eCommerceDash',
    //   //   title: 'eCommerce',
    //   //   icon: <Circle size={12} />,
    //   //   navLink: '/dashboard/ecommerce'
    //   // }
    // ]
  }
]