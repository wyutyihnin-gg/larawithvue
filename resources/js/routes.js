const Dashboard = () => import('@/js/components/Dashboard');
const Profile = () => import('@/js/components/Profile');
const Users = () => import('@/js/components/Users');

let routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },
    {
        path: '/users',
        name: 'users',
        component: Users
    },
]

export default routes;