 
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { posts: data }
  }
}

const Use = ({ posts }) => {
  

  return (
    <div className='container'>
      <h1>All Users</h1>
      <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
      {posts.map(post => (
       <tr key={post.id}>
                 
       <td  > {post.name} </td>
       <td  > {post.email} </td>
       <td>
       <Link href={'/api/hey/' + post.id} key={post.id}> <button
            
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
  );
}
 
export default Use;