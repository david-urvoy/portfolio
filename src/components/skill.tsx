const levelClass: Record<`${number}p`, string> = {
    '50p': 'w-[50%]',
    '55p': 'w-[55%]',
    '60p': 'w-[60%]',
    '65p': 'w-[65%]',
    '70p': 'w-[70%]',
    '75p': 'w-[75%]',
    '80p': 'w-[80%]',
    '85p': 'w-[85%]',
    '90p': 'w-[90%]',
    '95p': 'w-[95%]',
    '100p': 'w-[100%]',
} as const

export function SkillCard({
    name,
    level = 0,
    imagePath,
    altText,
}: {
    name: string
    level?: number
    imagePath?: string
    altText?: string
}) {
    return (
        <span className="inline-flex w-full gap-x-4">
            <img src={imagePath} alt={altText} className="h-8 w-8" /> {name}
            <div className="h-2 w-3/12 self-center rounded-2xl bg-green-200">
                <div
                    className={`h-full ${levelClass[`${level}p`]} rounded-2xl bg-green-600`}
                />
            </div>
        </span>
    )
}
