interface TechIconsProps {
    icons: { name: string; url: string }[];
}

const TechIcons = ({ icons }: TechIconsProps) => {
    return (
        <div className="flex flex-wrap gap-4">
            {icons.map((icon) => (
                <img key={icon.name} src={icon.url} alt={icon.name} className="w-12 h-12" />
            ))}
        </div>
    );
};

export default TechIcons;
