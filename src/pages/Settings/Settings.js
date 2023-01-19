
export default function Settings (props) {
  return (
    <>
      <h1>Account</h1>
      <h2>Username: {props.username}</h2>
      <h2>Email: {props.email}</h2>
      <h3>Name: {props.firstName} {props.lastName}</h3>
      <button>Delete Account</button>
    </>
  )
}