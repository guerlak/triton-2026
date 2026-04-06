interface CountryFlagProps {
    countryCode: string;
    className?: string;
}

export const CountryFlag = ({ countryCode, className = "w-6 h-4" }: CountryFlagProps) => {
    if (!countryCode) return null;
    return (
        <img
            src={`https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`}
            alt={countryCode}
            className={`${className} object-contain rounded-sm inline-block`}
        />
    );
};
