import { Link, useNavigate } from "react-router-dom";

export default function LinkBtton({ children, to }) {
  const className = "text-sm text-blue-500 hover:text-blue-900";
  const navigate = useNavigate();
  if (to === "-1") {
    return (
      <button onClick={() => navigate(-1)} className={className}>
        {children}
      </button>
    );
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
