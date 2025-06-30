import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
<div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-rose-50 to-rose-100/30 backdrop-blur-[2px]">      {" "}
      <Toaster
        containerClassName="mt-4"
        toastOptions={{
          className: "",
          style: {
            background: "transparent",
            boxShadow: "none",
            padding: 0,
            margin: 0,
          },
        }}
      />
      <div className="relative z-10 flex flex-col min-h-screen">{children}</div>
    </div>
  );
};

export default Layout;
