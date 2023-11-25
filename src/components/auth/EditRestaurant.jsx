import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditRestaurant = () => {
    const [restaurant, setRestaurant] = useState({
        name: '',
        description: '',
        address: '',
        phone_number: '',
        email: '',
        image: '',
    });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchRestaurant();
    }, [id]);

    const fetchRestaurant = async () => {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:8000/api/restaurants/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.ok) {
            const data = await response.json();
            setRestaurant(data);
        } else {
            console.error('Failed to fetch restaurant');
        }
    };

    const handleInputChange = (event) => {
        setRestaurant({ ...restaurant, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:8000/api/restaurants/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(restaurant),
        });

        if (response.ok) {
            navigate('/main'); // Navigate back to the main page or dashboard
        } else {
            console.error('Failed to update restaurant');
        }
    };

    return (
        <div className="container">
            <h2>Edit Restaurant</h2>
            <form onSubmit={handleSubmit}>
                {/* Name field */}
                <input
                    type="text"
                    name="name"
                    value={restaurant.name}
                    onChange={handleInputChange}
                    placeholder="Restaurant Name"
                    className="form-control mb-2"
                    required
                />

                {/* Description field */}
                <textarea
                    name="description"
                    value={restaurant.description}
                    onChange={handleInputChange}
                    placeholder="Restaurant Description"
                    className="form-control mb-2"
                    required
                />

                {/* Address field */}
                <input
                    type="text"
                    name="address"
                    value={restaurant.address}
                    onChange={handleInputChange}
                    placeholder="Restaurant Address"
                    className="form-control mb-2"
                    required
                />

                {/* Phone Number field */}
                <input
                    type="tel"
                    name="phone_number"
                    value={restaurant.phone_number}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="form-control mb-2"
                    required
                />

                {/* Email field */}
                <input
                    type="email"
                    name="email"
                    value={restaurant.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="form-control mb-2"
                    required
                />

                {/* Image URL field */}
                <input
                    type="url"
                    name="image"
                    value={restaurant.image}
                    onChange={handleInputChange}
                    placeholder="Image URL"
                    className="form-control mb-2"
                    required
                />
                <button type="submit" className="btn btn-primary">Update Restaurant</button>
            </form>
        </div>
    );
};

export default EditRestaurant;
