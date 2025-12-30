import AboutCard from "../components/ProfileCard";
import { profile } from "../assets";
export default function Temp() {
  return (
    <div style={{ backgroundColor: "#1c1f1c" }}>
      <AboutCard position="OFFICE" img={profile} name="오지샘" />
    </div>
  );
}
