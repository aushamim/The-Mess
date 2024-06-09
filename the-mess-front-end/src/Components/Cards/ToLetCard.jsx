import { Link } from "react-router-dom";

const ToLetCard = () => {
  return (
    <Link
      to={`/to-let/0`}
      className="bg-white bg-opacity-90 rounded-md shadow-md shadow-purple-100 group grid grid-cols-1 xl:grid-cols-2 overflow-hidden"
    >
      <div className="h-52 overflow-hidden">
        <img
          className="h-full w-full object-cover group-hover:scale-105 duration-300"
          src="https://www.mydomaine.com/thmb/bepet4VMGUG70sCLFNQRdZm9bbg=/2048x0/filters:no_upscale():strip_icc()/SuCasaDesign-Modern-9335be77ca0446c7883c5cf8d974e47c.jpg"
          alt=""
        />
      </div>
      <div className="p-5 flex">
        <table>
          <tbody>
            <tr>
              <td>Type:</td>
              <td className="pl-2">Room</td>
            </tr>
            <tr>
              <td>Location:</td>
              <td className="pl-2">Mohammadpur</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td className="pl-2">Mohammadpur Limited Housing</td>
            </tr>
            <tr>
              <td>Includes:</td>
              <td className="pl-2">Wifi, Fridge, Lift, Water Filter</td>
            </tr>
            <tr>
              <td>Rent:</td>
              <td className="pl-2">5000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Link>
  );
};

export default ToLetCard;
