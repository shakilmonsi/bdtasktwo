

import { RouterProvider } from 'react-router-dom';
import routes from './Routs/Routs';

function App() {
  return (
    <div className=""style={{backgroundColor:"#F1F1F1"}}>
       <RouterProvider router={routes}></RouterProvider>

    </div>
  );
}

export default App;
