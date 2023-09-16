
export const ServiceCard = ({serviceInfo}) => {

  return (
    <div className="w-[300px] h-[520px] bg-white border border-gray-200 rounded-lg shadow mx-auto">
      <div className="w-auto h-auto">
        <img className="w-[300px] h-[300px] rounded-t-lg object-cover" src={serviceInfo.img} alt="Service image" />
      </div>
      <div className="p-5 mx-0">
        <h5 className="mb-2 text-2xl text-left font-bold tracking-tight text-gray-900 ">
          {serviceInfo.title}
        </h5>
        <p className="mb-3 font-normal text-gray-900 text-left">
          {serviceInfo.description}
        </p>
      </div>
    </div>
  )
}
