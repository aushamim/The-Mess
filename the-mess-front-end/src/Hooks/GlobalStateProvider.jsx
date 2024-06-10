import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "sonner";

export const GlobalContext = createContext(null);

const GlobalStateProvider = ({ children }) => {
  const devMode = false;
  const APIHost = devMode
    ? "http://127.0.0.1:8000"
    : "https://the-mess.onrender.com";

  const [userId, setUserId] = useState(
    parseInt(localStorage.getItem("user_id")) || null
  );
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false);
  const [posts, setPosts] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [postsLoading, setPostsLoading] = useState(true);

  const loadUser = () => {
    fetch(`${APIHost}/user/list/${userId}/`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.username) {
          setUser(data);
          setAdmin(data?.role == "admin");
        }
      });
  };

  const loadPosts = () => {
    setPostsLoading(true);
    fetch(`${APIHost}/posts/list/`)
      .then((res) => res.json())
      .then((data) => {
        data.reverse();
        setPosts(data);
        setUserPosts(data?.filter((post) => post?.user?.id == userId));
        setPostsLoading(false);
      });
  };

  useEffect(() => {
    if (userId) {
      loadUser();
    }
    loadPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const logout = (navigate) => {
    if (!token) {
      toast.error("User not logged in.");
      return;
    }

    const promise = () => {
      return fetch(`${APIHost}/user/logout/`, {
        method: "POST",
        headers: {
          Authorization: `Token ${token}`,
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            throw new Error(data.error);
          } else {
            localStorage.removeItem("token");
            localStorage.removeItem("user_id");
            setUser(null);
            setUserId(null);
            navigate("/");
          }
        })
        .catch((error) => {
          throw error;
        });
    };

    toast.promise(promise, {
      loading: "Logging out. Please wait.",
      success: "Logged out successfully",
      error: (error) => {
        return error;
      },
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        devMode,
        APIHost,
        token,
        setToken,
        logout,
        userId,
        setUserId,
        admin,
        user,
        loadUser,
        posts,
        userPosts,
        postsLoading,
        loadPosts,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStateProvider;
