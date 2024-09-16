export const Tooltip = ({
  label,
  position,
}: {
  label: string;
  position: "left" | "right";
}) => {
  return (
    <span
      className={`group-hover:visible group-hover:z-50 invisible absolute rounded shadow-lg p-1 bg-gray-700 text-white -mt-8 ${
        position === "left" ? "-ml-10" : "-mr-20"
      }`}
    >
      {label}
    </span>
  );
};
