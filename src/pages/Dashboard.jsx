// import React, { useMemo} from 'react';
// import useLocalStorageCrud from '../hooks/useLocalStorageCrud';
// import DashboardWidget from '../components/DashboardWidget';

// const Dashboard = () => {
//     const { items } = useLocalStorageCrud('users');

//     const userCount = useMemo(() => {
//         console.log('Calculating user count...');
//         return items.length;
//     }, [items]);

//     return (
//         <div>
//             <h2>Dashboard</h2>
//             <DashboardWidget title='Registered Users' count={userCount} />
//         </div>
//     )
// }

// export default Dashboard;