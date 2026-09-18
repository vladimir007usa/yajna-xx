import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 text-primary font-heading text-sm uppercase tracking-wider hover:underline transition-all active:scale-95"
    >
      <ArrowLeft size={18} /> Back
    </button>
  );
};

export default BackButton;
