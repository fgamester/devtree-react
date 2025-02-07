export default function ValidationError({ children }: { children: React.ReactNode }) {
    return (
        <p className="bg-red-50 py-1.5 text-red-600 text-center rounded-lg">{children}</p>
    )
}
