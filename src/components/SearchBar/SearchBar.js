import "../SearchBar/SearchBar.css"

export default function SearchBar () {
  return (
    <form className="search">
      <input className="search-bar" type="text" placeholder="🔍 Search TumblE" />
    </form>
  )
}