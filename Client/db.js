import React, { useState, useEffect } from 'react';

function Dashboard() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/user', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserData(data);
                } else {
                    console.error('Failed to fetch user data');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>User Dashboard</h1>
            {userData && (
                <div>
                    <p>Username: {userData.username}</p>
                    {/* Display other user details as needed */}
                </div>
            )}
        </div>
    );
}

export default Dashboard;
