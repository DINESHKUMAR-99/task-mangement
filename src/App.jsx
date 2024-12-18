import { BrowserRouter } from "react-router-dom";
import Routes from "../routes/Routes";


const App = () => {

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    // <Router>
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    //         user ? <Navigate to="/tasks" /> : <Login setUser={setUser} />
    //       }
    //     />
    //     <Route
    //       path="/profile"
    //       element={user ? <Profile user={user} /> : <Navigate to="/" />}
    //     />
    //     <Route path="/tasks" element={user ? <Tasks /> : <Navigate to="/" />} />
    //   </Routes>
    // </Router>
  );
};

export default App;
