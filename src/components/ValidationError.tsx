interface ComponentProps {
    message?: string;
}

export default function ValidationError({ message }: ComponentProps) {
    if (!message) return null;
    return (
        <p className="text-red">{message}</p>
    )
}
