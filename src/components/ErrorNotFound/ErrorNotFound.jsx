import gatoTriste from "/sad-kitty.jpg"
import errorNotFound from "./ErrorNotFound.module.css"

const ErrorNotFound = () => {
  return (
    <>
    <h2>404 Not Found</h2>
    <img className={errorNotFound.gatoTriste} src={gatoTriste} alt="" />
    </>
  )
}

export default ErrorNotFound