import React, { useState } from 'react';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('');
  const [list, setList] = useState([]);

  const Add = () => {
    if (title && description) {
      setList([...list, { title, description }]);
      setTitle('');
      setDesc('');
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        className="border p-2 mr-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className="border p-2 mr-2"
        placeholder="Description"
        value={description}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button className="bg-blue-500 text-white p-2" onClick={Add}>
        Add
      </button>
      {list.map((item, index) => (
        <div key={index} className="mt-2">
          <h2 className="text-xl">{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
