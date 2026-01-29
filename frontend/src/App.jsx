import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Planets from "./pages/Planets";
import PlanetDetail from "./pages/PlanetDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Events from "./pages/Events";
import Map from "./pages/Map";
import SpaceChatbot from "./pages/SpaceChatbot";
import Quiz from "./pages/Quiz"; // ✅ NEW
import AstronomyCalendar from "./pages/AstronomyCalendar";

/* 📘 NOVEL */
import Novel from "./pages/novel/Novel";
import Chapter1 from "./pages/novel/Chapter1";
import Chapter2 from "./pages/novel/Chapter2";
import Chapter3 from "./pages/novel/Chapter3";
import Chapter4 from "./pages/novel/Chapter4";
import Chapter5 from "./pages/novel/Chapter5";
import Chapter6 from "./pages/novel/Chapter6";
import Chapter7 from "./pages/novel/Chapter7";
import Chapter8 from "./pages/novel/Chapter8";
import Chapter9 from "./pages/novel/Chapter9";
import Chapter10 from "./pages/novel/Chapter10";
import Chapter11 from "./pages/novel/Chapter11";
import Chapter12 from "./pages/novel/Chapter12";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/planet/:id" element={<PlanetDetail />} />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/map" element={<Map />} />
        <Route path="/chatbot" element={<SpaceChatbot />} />
        <Route path="/calendar" element={<AstronomyCalendar />} />


        {/* ✅ QUIZ ROUTE */}
        <Route path="/quiz" element={<Quiz />} />

        {/* 📘 NOVEL ROUTES */}
        <Route path="/novel" element={<Novel />} />
        <Route path="/novel/chapter-1" element={<Chapter1 />} />
        <Route path="/novel/chapter-2" element={<Chapter2 />} />
        <Route path="/novel/chapter-3" element={<Chapter3 />} />
        <Route path="/novel/chapter-4" element={<Chapter4 />} />
        <Route path="/novel/chapter-5" element={<Chapter5 />} />
        <Route path="/novel/chapter-6" element={<Chapter6 />} />
        <Route path="/novel/chapter-7" element={<Chapter7 />} />
        <Route path="/novel/chapter-8" element={<Chapter8 />} />
        <Route path="/novel/chapter-9" element={<Chapter9 />} />
        <Route path="/novel/chapter-10" element={<Chapter10 />} />
        <Route path="/novel/chapter-11" element={<Chapter11 />} />
        <Route path="/novel/chapter-12" element={<Chapter12 />} />
      </Routes>
    </>
  );
}
