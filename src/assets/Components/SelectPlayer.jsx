import { MdDeleteOutline } from "react-icons/md";
const SelectPlayer = ({ cp, removeplayer }) => {
  console.log(cp);
  return (
    <div>
      <div className="m-5 border-2 rounded-lg p-2 flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <img className="rounded-xl w-12 h-12" src={cp.image} alt="" />
          <div>
            <h1 className="text-lg font-soora font-bold">{cp.name}</h1>
            <h1>{cp.role.batting}</h1>
            <h1>Price:${cp.biddingPrice}</h1>
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              removeplayer(cp);
            }}
            className="text-2xl"
          >
            <MdDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectPlayer;
