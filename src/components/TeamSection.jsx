import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { profile, profileImages } from "../assets";
import BracketsLeft from "./BracketsLeft";
import BracketsRight from "./BracketsRight";
import ProfileCard from "./ProfileCard";

function ProfileWithCard({
  member,
  team,
  profileId,
  hoveredProfile,
  setHoveredProfile,
  styles,
}) {
  const profileRef = useRef(null);
  const [cardPosition, setCardPosition] = useState({ top: 0, left: 0 });

  // imgKey로 실제 이미지 가져오기
  const memberImg = member.imgKey ? profileImages[member.imgKey] : profile;

  useEffect(() => {
    if (hoveredProfile === profileId && profileRef.current) {
      const rect = profileRef.current.getBoundingClientRect();
      setCardPosition({
        top: rect.top + window.scrollY,
        left: rect.left + rect.width / 2,
      });
    }
  }, [hoveredProfile, profileId]);

  return (
    <div
      className={styles.profileWrapper}
      onMouseEnter={() => setHoveredProfile(profileId)}
      onMouseLeave={() => setHoveredProfile(null)}
    >
      <img
        ref={profileRef}
        src={memberImg}
        className={styles.profile}
        alt={member.name || "프로필"}
      />
      {hoveredProfile === profileId &&
        createPortal(
          <div
            style={{
              position: "absolute",
              top: cardPosition.top,
              left: cardPosition.left,
              transform: "translate(-50%, -100%)",
              marginTop: "-10px",
              zIndex: 9999,
            }}
            onMouseEnter={() => setHoveredProfile(profileId)}
            onMouseLeave={() => setHoveredProfile(null)}
          >
            <ProfileCard
              position={member.position || team.position}
              img={memberImg}
              name={member.name || "이름"}
              color={team.color}
            />
          </div>,
          document.body
        )}
    </div>
  );
}

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
            <ProfileWithCard
              key={profileId}
              member={member}
              team={team}
              profileId={profileId}
              hoveredProfile={hoveredProfile}
              setHoveredProfile={setHoveredProfile}
              styles={styles}
            />
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
