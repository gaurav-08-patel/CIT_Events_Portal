const defaultCircles = [
    {
        style: {
            top: -80,
            right: -80,
            width: 540,
            height: 540,
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.14)",
            boxShadow: "0 0 140px rgba(255,255,255,0.1)",
        },
    },
    {
        style: {
            bottom: -50,
            left: -50,
            width: 340,
            height: 340,
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 0 110px rgba(255,255,255,0.08)",
        },
    },
    {
        style: {
            top: "30%",
            right: "15%",
            width: 220,
            height: 220,
            background: "rgba(66,183,42,0.24)",
            border: "1px solid rgba(134,239,172,0.18)",
            boxShadow: "0 0 90px rgba(66,183,42,0.14)",
        },
    },
];

export function DecorativeCircles({
    circles = defaultCircles,
    className = "",
}) {
    return (
        <>
            {circles.map((circle, index) => (
                <div
                    key={circle.id ?? index}
                    aria-hidden="true"
                    className={className}
                    style={{
                        position: "absolute",
                        borderRadius: "50%",
                        pointerEvents: "none",
                        ...circle.style,
                    }}
                />
            ))}
        </>
    );
}
