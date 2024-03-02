import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Main</div>} />
        <Route path="/:animalCategory" element={<>AnimalCategory</>} />
        <Route path="product" element={<>Product</>} />
        <Route path="wishlist" element={<>Wishlist </>} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
