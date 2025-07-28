import { useState } from 'react';

function Education() {
    const [isEditing, setIsEditing] = useState(true);

    const [formData, setFormData] = useState({
        school: '',
        title: '',
        dateOfStudy: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        setIsEditing(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    return (
        <div className="cv-section">
            <h2>Educational Experience</h2>

            {isEditing ? (
                <div>
                    <div className="form-group">
                    <input
                        className="form-input"
                        type="text"
                        name="school"
                        placeholder="School Name"
                        value={formData.school}
                        onChange={handleInputChange}
                    />
                    </div>
                    <div className="form-group"> 
                    <input
                        className="form-input"
                        type="text"
                        name="title"
                        placeholder="Title of Study"
                        value={formData.title}
                        onChange={handleInputChange}
                    />
                    </div>
                    <div className="form-group">
                    <input
                        className="form-input"
                        type="text"
                        name="dateOfStudy"
                        placeholder="Date of Study"
                        value={formData.dateOfStudy}
                        onChange={handleInputChange}
                    />
                    </div>
                    <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>   
                </div>   
            ) : (
                <div className="display-info">
                    <p><strong>School:</strong> {formData.school}</p>
                    <p><strong>Title: </strong> {formData.title}</p>
                    <p><strong>Date: </strong> {formData.dateOfStudy}</p>
                    <button className="btn btn-secondary" onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    );
}

export default Education;