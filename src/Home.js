// src/App.js
import React, { useState } from 'react';

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Ajinkya Kulkarni',
      phone: '6375667091',
      email: 'kulkarniajinkya729@gmail.com',
    },
    {
      id: 2,
      name: 'Rutuja',
      phone: '87965432134',
      email: 'kulrut43@gmail.com',
    },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const [editing, setEditing] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = () => {
    setData([...data, { ...formData, id: data.length + 1 }]);
    setFormData({ name: '', phone: '', email: '' });
  };

  const handleEdit = (id) => {
    setEditing(id);
    const itemToEdit = data.find((item) => item.id === id);
    setFormData({ ...itemToEdit });
  };

  const handleUpdate = () => {
    setData(
      data.map((item) => (item.id === editing ? { ...formData, id: editing } : item))
    );
    setFormData({ name: '', phone: '', email: '' });
    setEditing(null);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>CRUD App</h1>
      <div>
        <h2>Add or Edit Entry</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {editing ? (
          <button onClick={handleUpdate}>Update</button>
        ) : (
          <button onClick={handleAdd}>Add</button>
        )}
      </div>
      <div>
        <h2>Entries</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>
                  <button onClick={() => handleEdit(item.id)}>Edit</button>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
