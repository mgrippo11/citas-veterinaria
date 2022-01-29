
const Error = ({mensaje}) => {
  return (
    <div className='bg-red-800 text-white text-center mt-3 p-3 uppercase font-bold mb-3 rounded-md'>
        <p>{mensaje}</p>
    </div>
);
};

export default Error;
