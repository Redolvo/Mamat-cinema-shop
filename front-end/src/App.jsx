import { BrowserRouter, Routes, Route } from "react-router-dom";

//auth
import SignUp from "@/pages/SignUp";
import SignIn from "@/pages/SignIn";

//view content
import Home from "@/pages/Home";
// import MovieDetail from "@/pages/MovieDetail";
// import CheckoutTicket from "@/pages/CheckoutTicket";
// import Ticket from "@/pages/Ticket";
// import TicketList from "@/pages/TicketList";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* auth */}
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />

                {/* views content */}
                <Route path="/" element={<Home />} />
                {/* <Route path="/movie/1" element={<MovieDetail />} />
                <Route path="/checkout-ticket/1" element={<CheckoutTicket />} />
                <Route path="/your-ticket/1" element={<Ticket />} />
                <Route path="/ticket-list" element={<TicketList />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
