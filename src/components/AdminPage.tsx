import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const AdminPage = () => {
    const users = [
        { id: 1, username: 'Dominick Stephens', email: '22343288@studentmail.ul.ie', role: 'admin' },
        { id: 2, username: 'John Adams', email: 'johnadams@gmail.com', role: 'user' },
        { id: 3, username: 'Salim Saay', email: 'salim.saay@ul.ie', role: 'user' },
        { id: 4, username: 'Brionna Quinn', email: 'BQuinn@gmail.com', role: 'user' }
    ];

    const chartRef = useRef(null);

    useEffect(() => {
        const canvas = chartRef.current;
        const ctx = canvas.getContext('2d');

        // Check if there's an existing chart instance
        if (chartRef.current.chart) {
            // Destroy the existing chart
            chartRef.current.chart.destroy();
        }

        // Create a new chart
        chartRef.current.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Rings Sold',
                    data: [12, 19, 3, 5, 2, 3, 10],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Clean up
        return () => {
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }
        };
    }, []);

    return (
        <div className="container">
            <h1 className="mt-4">Admin Page</h1>

            {/* Table of Users */}
            <h2 className="mt-4">Users</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Graph */}
            <h2 className="mt-4">Sales</h2>
            <canvas ref={chartRef} id="myChart" width="400" height="200"></canvas>
        </div>
    );
}

export default AdminPage;
