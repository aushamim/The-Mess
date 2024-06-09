import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "sonner";

export const GlobalContext = createContext(null);

const GlobalStateProvider = ({ children }) => {
  const APIHost = "https://the-mess.onrender.com";
  // const APIHost = "http://127.0.0.1:8000";

  const [userId, setUserId] = useState(
    parseInt(localStorage.getItem("user_id")) || null
  );
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(null);

  const [posts, setPosts] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [postsLoading, setPostsLoading] = useState(true);
  const loadPosts = () => {
    setPostsLoading(true);
    fetch(`${APIHost}/posts/list/`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setUserPosts(data?.filter((post) => post?.user?.id == userId));
        setPostsLoading(false);
      });
  };

  useEffect(() => {
    loadPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (userId) {
      fetch(`${APIHost}/user/list/${userId}/`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.username) {
            setUser(data);
          }
        });
    }
  }, [APIHost, userId]);

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
            setUser(localStorage.getItem("user_id") || null);
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
        APIHost,
        token,
        setToken,
        logout,
        userId,
        setUserId,
        user,
        posts,
        userPosts,
        postsLoading,
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
