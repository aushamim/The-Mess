/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ToLetCard = ({ post }) => {
  return (
    <Link
      to={`/to-let/${post?.id}`}
      className="bg-white bg-opacity-90 rounded-md shadow-md shadow-purple-100 group grid grid-cols-1 xl:grid-cols-2 overflow-hidden"
    >
      <div className="h-52 overflow-hidden">
        <img
          className="h-full w-full object-cover group-hover:scale-105 duration-300"
          src={post?.images?.urls[0]}
          alt=""
        />
      </div>
      <div className="p-5 flex">
        <table>
          <tbody>
            <tr>
              <td>Type:</td>
              <td className="pl-2">{post?.type}</td>
            </tr>
            <tr>
              <td>Location:</td>
              <td className="pl-2">{post?.location}</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td className="pl-2">{post?.full_address}</td>
            </tr>
            <tr>
              <td>Includes:</td>
              <td className="pl-2">{post?.extra}</td>
            </tr>
            <tr>
              <td>Rent:</td>
              <td className="pl-2">{post?.rent}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Link>
  );
};

export default ToLetCard;
