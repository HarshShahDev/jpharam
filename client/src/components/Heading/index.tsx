export default function index({ heading = "Heading", subHeading = "Sub Heading" }) {
  return (
    <div>
      <h1 className="text-center">{heading}</h1>
      <p className="text-center w-[400px]">{subHeading}</p><br/>
    </div>
  )
}
