import { Apartment } from "@/interfaces/Apartment";
import BackButton from "@/shared/components/BackButton";

//render apartment information
const ApartmentInfo = ({ apt }: { apt: Apartment }) => (
  <div className="bg-white rounded shadow-sm p-4">
    <h2>{apt.unit_name}</h2>
    <p className="text-muted mb-2">
      {apt.project} — {apt.city}
    </p>
    <p>{apt.unit_description}</p>
    <p className="fw-bold">Price: ${apt.price.toLocaleString()}</p>
    <p>
      <strong>Unit No:</strong> {apt.unit_number}
    </p>
    <div className="mt-3">
      <BackButton />
    </div>
  </div>
);
export default ApartmentInfo;