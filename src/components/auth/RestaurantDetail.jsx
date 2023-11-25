import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RestaurantDetail = () => {
    const [restaurant, setRestaurant] = useState(null);
    const [loading, setLoading] = useState(true);
    const [newMenu, setNewMenu] = useState({
        title: '',
        description: '',
    });
    const { id } = useParams(); // Get the restaurant ID from URL params

    useEffect(() => {
        fetchRestaurantDetails();
    }, []);

    const fetchRestaurantDetails = async () => {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:8000/api/restaurants/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Fetched data:', data); // Debug: log the fetched data
            setRestaurant(data);
        } else {
            console.error('Failed to fetch restaurant details');
        }
        setLoading(false);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!restaurant) {
        return <div>Restaurant not found.</div>;
    }

    const handleMenuChange = (event) => {
        setNewMenu({ ...newMenu, [event.target.name]: event.target.value });
    };

    const handleAddMenu = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:8000/api/menus`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ ...newMenu, restaurant_id: id }),
        });

        if (response.ok) {
            fetchRestaurantDetails(); // Re-fetch the restaurant details
        } else {
            console.error('Failed to add menu');
        }
    };

    return (
        <div className="container">
            <h2>{restaurant.name}</h2>
            <p>{restaurant.description}</p>
            {/* Display other restaurant details */}
            
            <h3>Menus</h3>
            {restaurant.menus && restaurant.menus.length > 0 ? (
                restaurant.menus.map(menu => (
                    <div key={menu.id}>
                        <h4>{menu.title}</h4>
                        {/* List dishes in this menu */}
                        {menu.dishes.map(dish => (
                            <div key={dish.id}>
                                <p>{dish.name}</p>
                                {/* Display other dish details */}
                            </div>
                        ))}
                    </div>
                    
                ))
            ) : (
                
                <p>No Menu Found</p>
                
            )}

            {/* You can add edit and delete buttons for each menu and dish here */}
            <h2>Add New Menu</h2>
                <form onSubmit={handleAddMenu}>
                    <input
                        type="text"
                        name="title"
                        value={newMenu.title}
                        onChange={handleMenuChange}
                        placeholder="Menu Title"
                        className="form-control mb-2"
                        required
                    />
                    <textarea
                        name="description"
                        value={newMenu.description}
                        onChange={handleMenuChange}
                        placeholder="Menu Description"
                        className="form-control mb-2"
                        required
                    />
                    <button type="submit" className="btn btn-success">Add Menu</button>
                </form>

        </div>
        
    );
};

export default RestaurantDetail;
