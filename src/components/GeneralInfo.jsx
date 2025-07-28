import { useState } from 'react';

function GeneralInfo() {
    // State to track if we're in edit mode
    const [isEditing, setIsEditing] = useState(true);

    //State to store the form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle submit
    const handleSubmit = () => {
        setIsEditing(false); //Show display
    };

    // Handle edit
    const handleEdit = () => {
        setIsEditing(true); // Show input field
    };

    return (
        <div className="cv-section">
            <h2>General Information</h2>

            {isEditing ? (
                // Edit mode - show input fields
                <div>
                    <div className="form-group">
                    <input
                        className="form-input"
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    </div>
                    <div className="form-group">
                    <input
                        className="form-input"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    </div>
                    <div className="form-group">
                    <input
                        className="form-input"
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                    </div>
                    <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </div> 
            ) : (
                // Display mode - show the data
                <div className="display-info">
                    <p><strong>Name:</strong> {formData.name}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Phone:</strong> {formData.phone}</p>
                    <button className="btn btn-secondary" onClick={handleEdit}>Edit</button>
                </div>    
            )}
        </div>
    );
}

export default GeneralInfo;