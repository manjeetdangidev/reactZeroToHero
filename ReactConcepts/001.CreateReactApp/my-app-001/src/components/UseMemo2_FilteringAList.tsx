import React, { useState, useMemo } from 'react';

const users = ['alice', 'bob', 'charlie', 'david', 'emma'];

function UseMemo2_FilterUsers() {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    console.log('Filtering...');
    return users.filter(user => user.includes(search.toLowerCase()));
  }, [search]);

  return (
    <>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search user"
      />
      <ul>
        {filtered.map(user => <li key={user}>{user}</li>)}
      </ul>
    </>
  );
}
export default UseMemo2_FilterUsers;