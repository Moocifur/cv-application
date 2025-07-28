import { useState } from 'react';

function Experience() {
    const [isEditing, setIsEditing] = useState(true);

    const [formData, setFormData] = useState({
        company: '',
        position: '',
        responsibilities: '',
        dateFrom: '',        // Fixed typo
        dateUntil: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({        // Fixed function name
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
            <h2>Practical Experience</h2>

            {isEditing ? (
                <div>
                    <div className="form-group">
                        <input
                            className="form-input"
                            type="text"
                            name="company"
                            placeholder="Company Name"
                            value={formData.company}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-input"
                            type="text"
                            name="position"
                            placeholder="Position Title"
                            value={formData.position}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-input"
                            type="text"
                            name="responsibilities"
                            placeholder="Main Responsibilities"
                            value={formData.responsibilities}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-input"
                            type="text"
                            name="dateFrom"                    // Fixed name
                            placeholder="Date From"
                            value={formData.dateFrom}          // Fixed value
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-input"
                            type="text"
                            name="dateUntil"
                            placeholder="Date Until"
                            value={formData.dateUntil}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </div>            
            ) : (
                <div className="display-info">
                    <p><strong>Company:</strong> {formData.company}</p>
                    <p><strong>Position:</strong> {formData.position}</p>
                    <p><strong>Responsibilities:</strong> {formData.responsibilities}</p>  {/* Fixed typo */}
                    <p><strong>From:</strong> {formData.dateFrom}</p>          {/* Fixed field */}
                    <p><strong>Until:</strong> {formData.dateUntil}</p>
                    <button className="btn btn-secondary" onClick={handleEdit}>Edit</button>  {/* Added missing classes */}
                </div>    
            )}
        </div>
    );
}

export default Experience;