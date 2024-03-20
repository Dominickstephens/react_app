import Chart from 'chart.js/auto';
import {useEffect, useRef} from "react";

const CustomerPage = () => {
    const orders = [
        { id: 1, orderNumber: 'ORD123', date: '2024-03-16', items: [{ id: 1, name: 'Smart Ring', quantity: 1, price: 150 }, { id: 2, name: 'Travel Stand', quantity: 1, price: 45 }], status: 'Delivered' },
    ];

    const chartData = {
        labels: ['Songs Listened To', 'Pages Read', 'TikToks Watched', 'Slides Presented'],
        datasets: [
            {
                label: 'Activity',
                data: [32, 27, 48, 11],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)', // Songs Listened To
                    'rgba(54, 162, 235, 0.2)', // Pages Read
                    'rgba(255, 206, 86, 0.2)', // TikToks Watched
                    'rgba(75, 192, 192, 0.2)', // Slides Presented
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        if (chartRef.current.chart) {
            chartRef.current.chart.destroy();
        }
        chartRef.current.chart = new Chart(ctx, {
            type: 'pie',
            data: chartData,
        });

        return () => {
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }
        };
    }, []);

    return (
        <div className="container">
            <h1 className="mt-4">Customer Page</h1>

            <div className="card mt-4">
                <div className="card-header">
                    Account Information
                </div>
                <div className="card-body">
                    <h5 className="card-title">Salim Saay</h5>
                    <p className="card-text">Email: salim.saay@ul.ie</p>
                    <p className="card-text">Shipping Address: Lero, UL, Limerick</p>
                    <p className="card-text">Billing Address: Lero, UL, Limerick</p>
                </div>
            </div>

            <div className="card mt-4">
                <div className="card-header">
                    Activity Chart
                </div>
                <div className="card-body">
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            <canvas ref={chartRef}></canvas>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mt-4">
                <div className="card-header">
                    Order History
                </div>
                <ul className="list-group list-group-flush">
                    {orders.map(order => (
                        <li key={order.id} className="list-group-item">
                            <div>
                                <strong>Order Number:</strong> {order.orderNumber}
                            </div>
                            <div>
                                <strong>Date:</strong> {order.date}
                            </div>
                            <div>
                                <strong>Items:</strong>
                                <ul>
                                    {order.items.map(item => (
                                        <li key={item.id}>{item.name} - Quantity: {item.quantity} - Price:
                                            €{item.price}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <strong>Status:</strong> {order.status}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default CustomerPage;
