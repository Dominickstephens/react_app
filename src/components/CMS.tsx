import { useState } from 'react';

const CMS = () => {
    const [entries, setEntries] = useState([]);
    const [newEntry, setNewEntry] = useState({ heading: '', content: '', small_text: '' });
    const [selectedEntry, setSelectedEntry] = useState(null);
    const [users, setUsers] = useState([
        { id: 1, name: 'Dominick Stephens', email: '22343288@studentmail.ul.ie' },
    ]);
    const [newUserName, setNewUserName] = useState('');
    const [newUserEmail, setNewUserEmail] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewEntry((prevEntry) => ({ ...prevEntry, [name]: value }));
    };

    const handleAddEntry = (event) => {
        event.preventDefault();
        setEntries((prevEntries) => [
            ...prevEntries,
            {
                id: prevEntries.length + 1,
                heading: newEntry.heading,
                content: newEntry.content,
                small_text: newEntry.small_text,
                timestamp: new Date().toLocaleString(),
            },
        ]);
        setNewEntry({ heading: '', content: '', small_text: '' });
    };

    const handleEntryClick = (entry) => {
        setSelectedEntry(entry);
    };

    const handleCloseModal = () => {
        setSelectedEntry(null);
    };

    const handleAddUser = () => {
        const newUser = {
            id: users.length + 1,
            name: newUserName,
            email: newUserEmail,
        };
        setUsers([...users, newUser]);
        setNewUserName('');
        setNewUserEmail('');
    };

    const handleRemoveUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const handleRemoveCourse = (id) => {
        setEntries(entries.filter(course => course.id !== id));
    };

    const bootstrapColors = ['bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-light', 'bg-dark'];

    // Function to select a random color class
    const getColorClass = (entry: { id: number; }) => {
        if (!bootstrapColors[entry.id - 1]) {
            // If the color class for the entry does not exist, start over from the first color
            return bootstrapColors[(entry.id - 1) - bootstrapColors.length];
        }
        console.log(bootstrapColors[entry.id - 1]);
        return bootstrapColors[entry.id - 1];
    };


    return (
        <div>
            <div className="list-group bg-success mx-auto" style={{width: '65rem'}}>
                {entries.map((entry) => (
                    <div key={entry.id} className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${getColorClass(entry)}`}>
                        <div onClick={() => handleEntryClick(entry)} style={{ cursor: 'pointer' }}>
                            <h5 className="mb-1">{entry.heading}</h5>
                            <small className="text-body-secondary">{entry.timestamp}</small>
                            <p className="mb-1">{entry.content}</p>
                            <small className="text-body-secondary">{entry.small_text}</small>
                        </div>
                        <button className="btn btn-danger btn-sm ms-2" onClick={() => handleRemoveCourse(entry.id)}>Remove Course</button>
                    </div>
                ))}
            </div>
            <br></br>
            <div className="container">
                <div className="card mx-auto" style={{width: '50rem'}}>
                    <div className="card-body">
                        <h1 className="card-title">Add new Course Information</h1>
                            <form className="mt-3">
                                <div className="mb-3">
                                    <label htmlFor="heading" className="form-label">Heading</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="heading"
                                        name="heading"
                                        value={newEntry.heading}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="content" className="form-label">Content</label>
                                    <textarea
                                        className="form-control"
                                        id="content"
                                        name="content"
                                        value={newEntry.content}
                                        onChange={handleInputChange}
                                        rows={3}
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="small_text" className="form-label">Details</label>
                                    <textarea
                                        className="form-control"
                                        id="small_text"
                                        name="small_text"
                                        value={newEntry.small_text}
                                        onChange={handleInputChange}
                                        rows={1}
                                    ></textarea>
                                </div>
                                <button className="btn btn-primary" onClick={handleAddEntry}>Add Entry</button>
                            </form>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedEntry && (
                <div className="modal show" tabIndex={-1} style={{ display: 'block' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedEntry.heading}</h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {users.map((user) => (
                                        <tr key={user.id}>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>
                                                <button className="btn btn-danger btn-sm" onClick={() => handleRemoveUser(user.id)}>Remove</button>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    value={newUserName}
                                    onChange={(e) => setNewUserName(e.target.value)}
                                />
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={newUserEmail}
                                    onChange={(e) => setNewUserEmail(e.target.value)}
                                />
                                <button type="button" className="btn btn-primary" onClick={handleAddUser}>Add User</button>
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CMS;
