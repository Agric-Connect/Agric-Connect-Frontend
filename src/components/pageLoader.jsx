import { ThreeDots } from "react-loader-spinner"

const Pagelaoder = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#8e44ad"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  )
}

export default Pagelaoder