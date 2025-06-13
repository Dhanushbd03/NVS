interface AvatarPreviewListProps {
  count?: number; // Number of placeholder avatars
  // Or: items: { id: string | number; src: string; alt: string }[];
}

export function AvatarPreviewList({ count = 3 }: AvatarPreviewListProps) {
  // Using count for simplicity to replicate existing behavior
  const avatarIds = Array.from({ length: count }, (_, i) => i + 1);

  return (
    <div className="flex space-x-2">
      {avatarIds.map((id) => (
        <div key={id} className="w-10 h-10 rounded-full overflow-hidden border-2 border-background"> {/* Use themed border */}
          <img
            src={`https://i.pravatar.cc/150?img=${id}`}
            alt={`Avatar ${id}`}
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
