import axios from "axios";
import { useState, useEffect } from "react";
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
const Home = () => {
  const [users, setUsers] = useState([]);
  const apiEndPoint = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    const getUsers = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setUsers(res);
      
    };
    getUsers();
  }, []);
  
  return (
    <>
      <div className="container">
         
      <Head>
        <title>Fetching Users From API</title>
         
      </Head>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {users.map((post) => (
              <tr key={post.id}>
                 
                <td  > {post.name} </td>
                <td  > {post.email} </td>
                <td>
                <Link href={'/' + post.id} key={post.id}> <button
                     
                    className="btn btn-primary btn-sm"
                  >
                    View
                  </button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
