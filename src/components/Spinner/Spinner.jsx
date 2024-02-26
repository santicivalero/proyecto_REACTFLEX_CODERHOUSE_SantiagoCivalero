import spinner from './Spinner.module.css'

const Spinner = () => {
  return (
    <div className={spinner.loaderBox}>
    <div className={spinner.loader}></div>
    </div>
  )
}

export default Spinner
