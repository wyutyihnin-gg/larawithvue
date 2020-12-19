const Dashboard = () => import('@/js/components/Dashboard');
const Profile = () => import('@/js/components/Profile');
const Users = () => import('@/js/components/Users');
const Developer = () => import('@/js/components/Developer');

let routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/developer',
        name: 'developer',
        component: Developer
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