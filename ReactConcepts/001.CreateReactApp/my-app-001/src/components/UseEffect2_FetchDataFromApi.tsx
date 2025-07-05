import React,{useState, useEffect} from 'react';
function UseEffect2_FetchDataFromApi() {
   const[user,setUser] = useState(null);

   useEffect(() => {
      // Fetch data from an API
      fetch('https://randomuser.me/api/')
         .then(response => response.json())
         .then(data => {
            setUser(data.results[0]); // Assuming the API returns an array of results
         })
         .catch(error => console.error('Error fetching data:', error));
   }, []); // Empty dependency array means this effect runs once when the component mounts

   return user ? (
      <div>
         <p>Name : {user.name.first} {user.name.last}</p>
         <img src={user.picture.medium} alt="User" />
      </div>
   ) : (
      <p>Loading ...</p>
   )

}
export default UseEffect2_FetchDataFromApi;