import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Main = () => {
    const [restaurants, setRestaurants] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const [newRestaurant, setNewRestaurant] = useState({
        name: '',
        description: '',
        address: '',
        phone_number: '',
        email: '',
        image: '',
    });

    const handleInputChange = (event) => {
        setNewRestaurant({ ...newRestaurant, [event.target.name]: event.target.value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:8000/api/restaurants', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(newRestaurant),
        });

        if (response.ok) {
            fetchRestaurants(); // Refresh the list of restaurants
        } else {
            console.error('Failed to create restaurant');
        }
    };


    const fetchRestaurants = async () => {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:8000/api/restaurants', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.ok) {
            const data = await response.json();
            setRestaurants(data);
        } else {
            console.error('Failed to fetch restaurants');
        }
    };

    const editRestaurant = async (id) => {
        navigate(`/edit-restaurant/${id}`);
    };
    
    const deleteRestaurant = async (id) => {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:8000/api/restaurants/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    
        if (response.ok) {
            // Remove the restaurant from the state or re-fetch the list
            fetchRestaurants();
        } else {
            console.error('Failed to delete restaurant');
        }
    };
    

    return (
        <div className="container main-container">
            <div className="dashboard my-4">
                <h1>Welcome to Your Dashboard</h1>
                <p>Manage your restaurants and view orders here.</p>
    
                <div className="content-area">
                    {restaurants.length > 0 ? (
                        restaurants.map(restaurant => (
                            <div key={restaurant.id} className="card mb-3">
                                <div className="card-body">
                                    <h3 className="card-title">{restaurant.name}</h3>
                                    <p className="card-text">{restaurant.description}</p>
                                    <button className="btn btn-secondary mr-2" onClick={() => navigate(`/restaurant-details/${restaurant.id}`)}>View More</button>
                                    <button className="btn btn-primary mr-2" onClick={() => editRestaurant(restaurant.id)}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => deleteRestaurant(restaurant.id)}>Delete</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No restaurants to display</p>
                    )}
                </div>
            </div>
            <div className="container main-container">
            {/* ... existing dashboard content ... */}

            {/* Form for creating a new restaurant */}
            <div className="add-restaurant-form">
                <h2>Add New Restaurant</h2>
                <form onSubmit={handleFormSubmit}>
                {/* Name field */}
                <input
                    type="text"
                    name="name"
                    value={newRestaurant.name}
                    onChange={handleInputChange}
                    placeholder="Restaurant Name"
                    className="form-control mb-2"
                    required
                />

                {/* Description field */}
                <textarea
                    name="description"
                    value={newRestaurant.description}
                    onChange={handleInputChange}
                    placeholder="Restaurant Description"
                    className="form-control mb-2"
                    required
                />

                {/* Address field */}
                <input
                    type="text"
                    name="address"
                    value={newRestaurant.address}
                    onChange={handleInputChange}
                    placeholder="Restaurant Address"
                    className="form-control mb-2"
                    required
                />

                {/* Phone Number field */}
                <input
                    type="tel"
                    name="phone_number"
                    value={newRestaurant.phone_number}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="form-control mb-2"
                    required
                />

                {/* Email field */}
                <input
                    type="email"
                    name="email"
                    value={newRestaurant.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="form-control mb-2"
                    required
                />

                {/* Image URL field */}
                <input
                    type="url"
                    name="image"
                    value={newRestaurant.image}
                    onChange={handleInputChange}
                    placeholder="Image URL"
                    className="form-control mb-2"
                    required
                />

                {/* Submit button */}
                <button type="submit" className="btn btn-success">Add Restaurant</button>
            </form>

            </div>
        </div>
    </div>
        
    );
 }    
export default Main