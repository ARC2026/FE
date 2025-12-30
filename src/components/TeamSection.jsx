import { profile } from "../assets";
import BracketsLeft from "./BracketsLeft";
import BracketsRight from "./BracketsRight";
import ProfileCard from "./ProfileCard";
export default function TeamSection({
  team,
  hoveredProfile,
  setHoveredProfile,
  styles,
}) {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles[team.id]}>
        {team.hasBrackets && (
          <BracketsLeft color={team.color} width={18} height={64} />
        )}
        {team.members.map((member, index) => {
          const profileId = `${team.id}-${index}`;
          return (
            <div
              key={profileId}
              className={styles.profileWrapper}
              onMouseEnter={() => setHoveredProfile(profileId)}
              onMouseLeave={() => setHoveredProfile(null)}
            >
              <img
                src={member.img || profile}
                className={styles.profile}
                alt={member.name || "프로필"}
              />
              {hoveredProfile === profileId && (
                <div className={styles.cardContainer}>
                  <ProfileCard
                    position={team.position}
                    img={member.img || profile}
                    name={member.name || "이름"}
                    color={team.color}
                  />
                </div>
              )}
            </div>
          );
        })}
        {team.hasBrackets && (
          <BracketsRight color={team.color} width={18} height={64} />
        )}
      </div>
      <div className={styles.footerText} style={{ color: team.color }}>
        {team.position}
      </div>
    </div>
  );
}
