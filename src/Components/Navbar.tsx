export default function Navbar() {
  return (
    <div className='navbar'>
      <span className='navbar__logo'>Logo</span>
      <span className='navbar__options'>
        <a
          href='#'
          onClick={() => console.log("Hola")}
          className=' d-flex btn btn-secondary navbar__options--timer'
        >
          <h6>
            <i className='fa-solid fa-square-plus'></i>
          </h6>
          <h6>Add List</h6>
        </a>
        <a href='#' className='d-flex btn btn-secondary navbar__options--custom'>
          <h6>
            <i className='fa-solid fa-gear'></i>
          </h6>
          <h6>Options</h6>
        </a>
        <a href='#' className='d-flex btn btn-secondary navbar__options--custom'>
          <h6>
            <i className='fa-solid fa-pen'></i>
          </h6>
          <h6>Custom</h6>
        </a>
      </span>
    </div>
  );
}
